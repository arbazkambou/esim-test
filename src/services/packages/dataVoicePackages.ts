import { generateSlug } from "@/helpers/generateSlug";
import {
  globalErrorHandler,
  globalResponseHanlder,
} from "@/helpers/globalResponseHandler";
import { PackagesData } from "@/types/packages/data-only/DataOnlyCountryPackages";
import { CountriesThatHaveDataVoicePackages } from "@/types/packages/data-voice/CountriesThatHaveDataVoicePackages";
import { DataVoiceCountryPackages } from "@/types/packages/data-voice/DataVoiceCountryPackages";
import { DataVoiceGlobalPackages } from "@/types/packages/data-voice/DataVoiceGlobalPackages";
import api from "../../lib/axios/apiSetup";

export async function getCountriesThatHaveDataVoicePackages() {
  try {
    const response =
      await api.get<CountriesThatHaveDataVoicePackages>("/partner/country");

    if (!response.data.status) {
      throw new Error(globalResponseHanlder(response));
    }

    const data = response.data.data;

    const modifiedData = data.map((item) => ({
      ...item,

      href: `/${generateSlug(item.name)}/`,
    }));

    return modifiedData;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

export async function getContinentsThatHaveDataVoicePackages() {
  try {
    const response =
      await api.get<CountriesThatHaveDataVoicePackages>("/partner/continent");

    if (!response.data.status) {
      throw new Error(globalResponseHanlder(response));
    }
    const data = response.data.data;

    const modifiedData = data.map((item) => ({
      ...item,
      href: `/${item.slug}-esim/`,
    }));

    return modifiedData;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

export async function getDataVoicePackagesOfCountry(
  countrySlug: string,
): Promise<PackagesData> {
  try {
    const response = await api.get<DataVoiceCountryPackages>(
      `/partner/country/${countrySlug}`,
    );

    if (!response.data.status) {
      throw new Error(globalResponseHanlder(response));
    }

    return response.data.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

export async function getDataVoicePackagesOfRegion(
  regionSlug: string,
): Promise<PackagesData> {
  try {
    const response = await api.get<DataVoiceCountryPackages>(
      `/partner/continent/${regionSlug}`,
    );

    if (!response.data.status) {
      throw new Error(globalResponseHanlder(response));
    }

    return response.data.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

export async function getDataVoiceGlobalPackages(): Promise<PackagesData> {
  try {
    const response = await api.get<DataVoiceGlobalPackages>(`/partner/global`);

    if (!response.data.status) {
      throw new Error(globalResponseHanlder(response));
    }

    const globalPackagesResponse = response.data.data;

    const { data: packages, ...metaData } = globalPackagesResponse;

    const packagesWithPackageTypeProperty = packages.map((item) => ({
      ...item,
      package_type: "DATA-VOICE-SMS",
    }));

    const countryInfoAndPackages = {
      updated_at: "",
      created_at: "",
      name: "Global",
      image_url: "/images/flags/globalMap.svg",
      cover_image: globalPackagesResponse.global_coverage_image,
      packages: packagesWithPackageTypeProperty,
    };

    const packagesData = { data: countryInfoAndPackages, ...metaData };
    return packagesData;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

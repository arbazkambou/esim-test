import { Country } from "@/helpers/generateSiteMap";
import {
  globalErrorHandler,
  globalResponseHanlder,
} from "@/helpers/globalResponseHandler";
import {
  CountriesThatHavePackagesResponeType,
  GetContinentsResponse,
} from "@/types/packages/data-only/CountriesThatHaveDataOnlyPackages";
import {
  CountryPackagesRespone,
  PackagesData,
} from "@/types/packages/data-only/DataOnlyCountryPackages";
import { GlobalPackageResponse } from "@/types/packages/data-only/DataOnlyGlobalPackages";
import api from "../axios/apiSetup";

export async function getCountriesThatHavePackages(): Promise<Country[]> {
  try {
    const response =
      await api.get<CountriesThatHavePackagesResponeType>("/packages/country");

    if (!response.data.status) {
      throw new Error(globalResponseHanlder(response));
    }
    const data = response.data.data;

    const modifiedData = data.map((item) => ({
      ...item,
      href: `/esim/${item.slug}`,
    }));

    return modifiedData;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

export async function getContinentsThatHavePackages() {
  try {
    const response = await api.get<GetContinentsResponse>(
      "/packages/continent",
    );

    if (!response.data.status) {
      throw new Error(globalResponseHanlder(response));
    }
    const data = response.data.data;

    const modifiedData = data.map((item) => ({
      ...item,
      href: `/regional/${item.slug}`,
    }));

    return modifiedData;
  } catch (error) {
    console.log("err", error);
    throw new Error(globalErrorHandler(error));
  }
}

export async function getPackagesOfCountry(countrySlug: string) {
  try {
    const response = await api.get<CountryPackagesRespone>(
      `/packages/country/${countrySlug}`,
    );

    if (!response.data.status) {
      throw new Error(globalResponseHanlder(response));
    }

    return response.data.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

export async function getUnlimitedPackagesOfCountry(countrySlug: string) {
  try {
    const response = await api.get<CountryPackagesRespone>(
      `/packages/country/${countrySlug}`,
      { params: { unlimited: true } },
    );

    if (!response.data.status) {
      throw new Error(globalResponseHanlder(response));
    }

    return response.data.data.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

export async function getGlobalPackages(): Promise<PackagesData> {
  try {
    const response = await api.get<GlobalPackageResponse>(`/packages/global`, {
      params: { unlimited: true },
    });

    if (!response.data.status) {
      throw new Error(globalResponseHanlder(response));
    }

    const globalPackagesResponse = response.data.data;

    const { data: packages, ...metaData } = globalPackagesResponse;

    const packagesWithPackageTypeProperty = packages.map((item) => ({
      ...item,
      package_type: "DATA-ONLY",
    }));

    const countryInfoAndPackages = {
      name: "Global",
      image_url: "/images/flags/globalMap.svg",
      packages: packagesWithPackageTypeProperty,
    };

    const packagesData = { data: countryInfoAndPackages, ...metaData };
    return packagesData;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

export async function getPackagesOfRegion(regionSlug: string) {
  try {
    const response = await api.get<CountryPackagesRespone>(
      `/packages/continent/${regionSlug}`,
      { params: { unlimited: true } },
    );

    if (!response.data.status) {
      throw new Error(globalResponseHanlder(response));
    }

    return response.data.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

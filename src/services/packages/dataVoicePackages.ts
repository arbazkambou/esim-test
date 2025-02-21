import {
  globalErrorHandler,
  globalResponseHanlder,
} from "@/helpers/globalResponseHandler";
import { CountriesThatHaveDataVoicePackages } from "@/types/packages/data-voice/CountriesThatHaveDataVoicePackages";
import liveApi from "../axios/apiSetupLive";
import { DataVoiceCountryPackages } from "@/types/packages/data-voice/DataVoiceCountryPackages";
import { DataVoiceGlobalPackages } from "@/types/packages/data-voice/DataVoiceGlobalPackages";
import { CountryPackagesMeta } from "@/types/packages/data-only/DataOnlyCountryPackages";

export async function getCountriesThatHaveDataVoicePackages() {
  try {
    const response =
      await liveApi.get<CountriesThatHaveDataVoicePackages>("/partner/country");

    if (!response.data.status) {
      throw new Error(globalResponseHanlder(response));
    }
    return response.data.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

export async function getContinentsThatHaveDataVoicePackages() {
  try {
    const response =
      await liveApi.get<CountriesThatHaveDataVoicePackages>(
        "/partner/continent",
      );

    if (!response.data.status) {
      throw new Error(globalResponseHanlder(response));
    }
    return response.data.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

export async function getDataVoicePackagesOfCountry(
  countrySlug: string,
): Promise<CountryPackagesMeta> {
  try {
    const response = await liveApi.get<DataVoiceCountryPackages>(
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
): Promise<CountryPackagesMeta> {
  try {
    const response = await liveApi.get<DataVoiceCountryPackages>(
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

export async function getDataVoiceGlobalPackages() {
  try {
    const response =
      await liveApi.get<DataVoiceGlobalPackages>(`/partner/global`);

    if (!response.data.status) {
      throw new Error(globalResponseHanlder(response));
    }

    return response.data.data.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

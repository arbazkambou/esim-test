import liveApi from "@/services/axios/apiSetupLive";
import { Country } from "@/helpers/generateSiteMap";
import {
  globalErrorHandler,
  globalResponseHanlder,
} from "@/helpers/globalResponseHandler";
import {
  CountriesThatHavePackagesResponeType,
  GetContinentsResponse,
} from "@/types/packages/data-only/CountriesThatHaveDataOnlyPackages";
import { CountryPackagesRespone } from "@/types/packages/data-only/DataOnlyCountryPackages";
import { GlobalPackageResponse } from "@/types/packages/data-only/DataOnlyGlobalPackages";

export async function getCountriesThatHavePackages(): Promise<Country[]> {
  try {
    const response =
      await liveApi.get<CountriesThatHavePackagesResponeType>(
        "/packages/country",
      );

    if (!response.data.status) {
      throw new Error(globalResponseHanlder(response));
    }
    return response.data.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

export async function getContinentsThatHavePackages() {
  try {
    const response = await liveApi.get<GetContinentsResponse>(
      "/packages/continent",
    );

    if (!response.data.status) {
      throw new Error(globalResponseHanlder(response));
    }
    return response.data.data;
  } catch (error) {
    console.log("err", error);
    throw new Error(globalErrorHandler(error));
  }
}

export async function getPackagesOfCountry(countrySlug: string) {
  try {
    const response = await liveApi.get<CountryPackagesRespone>(
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
    const response = await liveApi.get<CountryPackagesRespone>(
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

export async function getGlobalPackages() {
  try {
    const response = await liveApi.get<GlobalPackageResponse>(
      `/packages/global`,
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

export async function getPackagesOfRegion(regionSlug: string) {
  try {
    const response = await liveApi.get<CountryPackagesRespone>(
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

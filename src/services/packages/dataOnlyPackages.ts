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
import {
  SearchPackagesList,
  SearchPackagesListReturn,
} from "@/types/packages/data-only/SearchPackagesList";
import api from "../../lib/axios/apiSetup";
import { TopDestinations } from "@/types/packages/data-only/TopDestinations";

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

export async function searchPackagesList(): Promise<SearchPackagesListReturn> {
  try {
    const response = await api.get<SearchPackagesList>(`/search-package-list`);

    if (!response.data.status) {
      throw new Error(globalResponseHanlder(response));
    }

    const {
      global,
      global_voice,
      local,
      local_voice,
      regional,
      regional_voice,
    } = response.data.data;

    const globalDataOnly: { href: string; countries: Country[] } = {
      href: "global",
      countries: global,
    };

    const localDataOnly = local.map((country) => ({
      ...country,
      href: `/esim/${country.slug}/`,
    }));

    const regionalDataOnly = regional.map((region) => ({
      ...region,
      href: `/regional/${region.slug}/`,
    }));

    const globalDataVoice: { href: string; countries: Country[] } = {
      href: "/international-esim/",
      countries: global_voice.flatMap((item) => item.countries),
    };

    const localDataVoice = local_voice.map((country) => ({
      ...country,
      href: `/${country.slug}-esim/`,
    }));

    const regionalDataVoice = regional_voice.map((region) => ({
      ...region,
      href: `/${region.slug}-esim/`,
    }));

    return {
      global: globalDataOnly,
      local: localDataOnly,
      regional: regionalDataOnly,
      global_voice: globalDataVoice,
      local_voice: localDataVoice,
      regional_voice: regionalDataVoice,
    };
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

export async function getTopDestinations() {
  try {
    const response = await api.get<TopDestinations>("/top-destinations");

    if (!response.data.status) {
      throw new Error(globalResponseHanlder(response));
    }

    return response.data.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

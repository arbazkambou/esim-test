import { Country } from "@/helpers/generateSiteMap";
import {
  globalErrorHandler,
  globalHttpErrorHandler,
  globalResponseHandler,
} from "@/helpers/globalResponseHandler";
import { baseUrl } from "@/lib/fetch/apiSetup";
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
import { TopDestinations } from "@/types/packages/data-only/TopDestinations";

export async function getCountriesThatHavePackages(): Promise<Country[]> {
  try {
    const response = await fetch(`${baseUrl}/packages/country`, {
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 86400 },
    });

    if (!response.ok) {
      throw new Error(globalHttpErrorHandler(response));
    }

    const apiData: CountriesThatHavePackagesResponeType = await response.json();

    if (!apiData.status) {
      globalResponseHandler(apiData, response.status);
    }
    const data = apiData.data;

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
    const response = await fetch(`${baseUrl}/packages/continent`, {
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 86400 },
    });

    if (!response.ok) {
      throw new Error(globalHttpErrorHandler(response));
    }

    const apiData: GetContinentsResponse = await response.json();

    if (!apiData.status) {
      globalResponseHandler(apiData, response.status);
    }
    const data = apiData.data;

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
    const response = await fetch(`${baseUrl}/packages/country/${countrySlug}`, {
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 86400 },
    });

    if (!response.ok) {
      throw new Error(globalHttpErrorHandler(response));
    }

    const apiData: CountryPackagesRespone = await response.json();

    if (!apiData.status) {
      globalResponseHandler(apiData, response.status);
    }

    return apiData.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

export async function getGlobalPackages(): Promise<PackagesData> {
  try {
    const response = await fetch(`${baseUrl}/packages/global`, {
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 86400 },
    });

    if (!response.ok) {
      throw new Error(globalHttpErrorHandler(response));
    }

    const apiData: GlobalPackageResponse = await response.json();

    if (!apiData.status) {
      globalResponseHandler(apiData, response.status);
    }

    const globalPackagesResponse = apiData.data;

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
    const response = await fetch(
      `${baseUrl}/packages/continent/${regionSlug}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        next: { revalidate: 86400 },
      },
    );

    if (!response.ok) {
      throw new Error(globalHttpErrorHandler(response));
    }

    const apiData: CountryPackagesRespone = await response.json();

    if (!apiData.status) {
      globalResponseHandler(apiData, response.status);
    }

    return apiData.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

export async function searchPackagesList(): Promise<SearchPackagesListReturn> {
  try {
    const response = await fetch(`${baseUrl}/search-package-list`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(globalHttpErrorHandler(response));
    }

    const apiData: SearchPackagesList = await response.json();

    if (!apiData.status) {
      globalResponseHandler(apiData, response.status);
    }

    const {
      global,
      global_voice,
      local,
      local_voice,
      regional,
      regional_voice,
    } = apiData.data;

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
    const response = await fetch(`${baseUrl}/top-destinations`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(globalHttpErrorHandler(response));
    }

    const apiData: TopDestinations = await response.json();

    if (!apiData.status) {
      globalResponseHandler(apiData, response.status);
    }

    return apiData.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

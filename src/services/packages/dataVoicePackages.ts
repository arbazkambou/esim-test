import { generateSlug } from "@/helpers/generateSlug";
import {
  globalErrorHandler,
  globalResponseHandler,
} from "@/helpers/globalResponseHandler";
import { baseUrl } from "@/lib/fetch/apiSetup";
import { PackagesData } from "@/types/packages/data-only/DataOnlyCountryPackages";
import { CountriesThatHaveDataVoicePackages } from "@/types/packages/data-voice/CountriesThatHaveDataVoicePackages";
import { DataVoiceCountryPackages } from "@/types/packages/data-voice/DataVoiceCountryPackages";
import { DataVoiceGlobalPackages } from "@/types/packages/data-voice/DataVoiceGlobalPackages";

export async function getCountriesThatHaveDataVoicePackages() {
  try {
    const response = await fetch(`${baseUrl}/partner/country`, {
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 86400 },
    });

    const apiData: CountriesThatHaveDataVoicePackages = await response.json();

    if (!response.ok || !apiData.status) {
      globalResponseHandler(apiData, response.status);
    }

    const data = apiData.data;

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
    const response = await fetch(`${baseUrl}/partner/continent"`, {
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 86400 },
    });

    const apiData: CountriesThatHaveDataVoicePackages = await response.json();

    if (!response.ok || !apiData.status) {
      globalResponseHandler(apiData, response.status);
    }

    const data = apiData.data;

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
    const response = await fetch(`${baseUrl}/partner/country/${countrySlug}`, {
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 86400 },
    });

    const apiData: DataVoiceCountryPackages = await response.json();

    if (!response.ok || !apiData.status) {
      globalResponseHandler(apiData, response.status);
    }

    return apiData.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

export async function getDataVoicePackagesOfRegion(
  regionSlug: string,
): Promise<PackagesData> {
  try {
    const response = await fetch(`${baseUrl}/partner/continent/${regionSlug}`, {
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 86400 },
    });

    const apiData: DataVoiceCountryPackages = await response.json();

    if (!response.ok || !apiData.status) {
      globalResponseHandler(apiData, response.status);
    }

    return apiData.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

export async function getDataVoiceGlobalPackages(): Promise<PackagesData> {
  try {
    const response = await fetch(`${baseUrl}/partner/global`, {
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 86400 },
    });

    const apiData: DataVoiceGlobalPackages = await response.json();

    if (!response.ok || !apiData.status) {
      globalResponseHandler(apiData, response.status);
    }

    const globalPackagesResponse = apiData.data;

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

// Define Country and API Response types
export interface Country {
  id: number;
  code: string;
  code_alpha3: string;
  local_state_code: string | null;
  name: string;
  image_url: string;
  slug: string;
  starts_at?: string;
}

export interface OrganizedCountry {
  letter: string;
  countries: Country[];
}

export function organizeCountries(
  countriesData: Country[],
): OrganizedCountry[] {
  const countryMap = countriesData.reduce<Record<string, Country[]>>(
    (acc, country) => {
      const letter = country.name[0].toUpperCase();
      (acc[letter] = acc[letter] || []).push(country);
      return acc;
    },
    {} as Record<string, Country[]>,
  );

  return Object.keys(countryMap)
    .sort((a, b) => a.localeCompare(b))
    .map((letter) => ({
      letter,
      countries: countryMap[letter],
    }));
}

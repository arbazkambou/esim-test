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
  // Group countries by their first letter using reduce
  const countryMap = countriesData.reduce<Record<string, Country[]>>(
    (acc, country) => {
      const firstLetter = country.name.charAt(0).toUpperCase();
      if (!acc[firstLetter]) {
        acc[firstLetter] = [];
      }
      acc[firstLetter].push(country);
      return acc;
    },
    {},
  );

  // Convert the grouped object to an array and sort it by the letter key
  return Object.entries(countryMap)
    .map(([letter, countries]) => ({ letter, countries }))
    .sort((a, b) => a.letter.localeCompare(b.letter));
}

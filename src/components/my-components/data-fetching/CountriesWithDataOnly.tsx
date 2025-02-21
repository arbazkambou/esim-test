import Countries from "@/components/my-components/data-fetching/Countries";
import { getCountriesThatHavePackages } from "@/services/packages/dataOnlyPackages";

async function CountriesWithDataOnly() {
  const countries = await getCountriesThatHavePackages();
  return <Countries countries={countries} />;
}

export default CountriesWithDataOnly;

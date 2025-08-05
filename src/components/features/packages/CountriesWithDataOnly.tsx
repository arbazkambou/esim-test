import { getCountriesThatHavePackages } from "@/services/packages/dataOnlyPackages";
import Countries from "./Countries";

async function CountriesWithDataOnly() {
  const countries = await getCountriesThatHavePackages();
  return <Countries countries={countries} />;
}

export default CountriesWithDataOnly;

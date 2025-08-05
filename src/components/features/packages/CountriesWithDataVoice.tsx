import { getCountriesThatHaveDataVoicePackages } from "@/services/packages/dataVoicePackages";
import Countries from "./Countries";

async function CountriesWithDataVoice() {
  const countries = await getCountriesThatHaveDataVoicePackages();
  return <Countries countries={countries} />;
}

export default CountriesWithDataVoice;

import Countries from "@/components/my-components/data-fetching/Countries";
import { getCountriesThatHaveDataVoicePackages } from "@/services/packages/dataVoicePackages";

async function CountriesWithDataVoice() {
  const countries = await getCountriesThatHaveDataVoicePackages();
  return <Countries countries={countries} />;
}

export default CountriesWithDataVoice;

import { getCountriesThatHavePackages } from "@/services/packages/dataOnlyPackages";
import RegionsCountriesCarousel from "../carousels/RegionsCountriesCarousel";

async function SiteMapComponent() {
  const countries = await getCountriesThatHavePackages();

  return <RegionsCountriesCarousel countries={countries} />;
}

export default SiteMapComponent;

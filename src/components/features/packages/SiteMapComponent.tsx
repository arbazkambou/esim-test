import RegionsCountriesCarousel from "@/components/my-ui/carousels/RegionsCountriesCarousel";
import { getCountriesThatHavePackages } from "@/services/packages/dataOnlyPackages";

async function SiteMapComponent() {
  const countries = await getCountriesThatHavePackages();

  return <RegionsCountriesCarousel countries={countries} />;
}

export default SiteMapComponent;

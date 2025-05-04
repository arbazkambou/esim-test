import africa from "@/_assets/svgs/africaMap.svg";
import asia from "@/_assets/svgs/asiaMap.svg";
import europe from "@/_assets/svgs/europeMap.svg";
import middleEast from "@/_assets/svgs/middleEastMap.svg";
import northAmerica from "@/_assets/svgs/northAmericaMap.svg";
import oceania from "@/_assets/svgs/oceaniaMap.svg";
import southAmerica from "@/_assets/svgs/southAmerica.svg";
import { Country, organizeCountries } from "@/helpers/generateSiteMap";
import RegionsCountriesCarouselMobile from "./RegionsCountriesCarouselMobile";

function RegionsCountriesCarousel({ countries }: { countries: Country[] }) {
  const sortedCountries = organizeCountries(countries);

  const regionsData = [
    {
      name: "Europe",
      imgSrc: europe,
      href: "/regional/europe/",
    },
    {
      name: "North America",
      imgSrc: northAmerica,
      href: "/regional/north-america/",
    },
    {
      name: "South America",
      imgSrc: southAmerica,
      href: "/regional/south-america/",
    },
    {
      name: "Asia",
      imgSrc: asia,
      href: "/regional/asia/",
    },
    {
      name: "Oceania",
      imgSrc: oceania,
      href: "/regional/oceania/",
    },
    {
      name: "Africa",
      imgSrc: africa,
      href: "/regional/africa/",
    },
    {
      name: "Middle East",
      imgSrc: middleEast,
      href: "/regional/middle-east/",
    },
  ];

  return (
    <div className="mt-[1.31rem] px-3">
      <RegionsCountriesCarouselMobile
        countries={sortedCountries}
        regions={regionsData}
      />
    </div>
  );
}

export default RegionsCountriesCarousel;

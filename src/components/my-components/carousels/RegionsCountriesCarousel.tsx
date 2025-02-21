"use client";

import africa from "@/_assets/svgs/africaMap.svg";
import asia from "@/_assets/svgs/asiaMap.svg";
import europe from "@/_assets/svgs/europeMap.svg";
import middleEast from "@/_assets/svgs/middleEastMap.svg";
import northAmerica from "@/_assets/svgs/northAmericaMap.svg";
import oceania from "@/_assets/svgs/oceaniaMap.svg";
import southAmerica from "@/_assets/svgs/southAmerica.svg";
import { Country, organizeCountries } from "@/helpers/generateSiteMap";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
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
  const countriesRef = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const handleLetterClick = (letter: string) => {
    const targetElement = countriesRef.current[letter];

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="mt-[1.31rem] px-3 xl:hidden">
        <RegionsCountriesCarouselMobile
          countries={sortedCountries}
          regions={regionsData}
        />
      </div>
      <div className="mt-[3.88rem] hidden xl:grid xl:grid-cols-10">
        <div className="col-span-2">
          <h3 className="text-xl font-600">Regions</h3>
          <div className="mt-[2.5rem] flex flex-col justify-between gap-10">
            {regionsData.map((item, index) => (
              <Link
                className="group flex items-center gap-4"
                key={index}
                href={item.href}
              >
                <div className="h-[30px] w-[30px]">
                  <Image
                    src={item.imgSrc}
                    alt={`${item.name} eSIM`}
                    sizes="auto"
                  />
                </div>
                <p className="text-body-sm text-foreground-light transition-all group-hover:text-primary">
                  {item.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
        <div className="col-span-8">
          <h3 className="text-xl font-600">Countries</h3>

          {/* Letter Navigation */}
          <div className="mt-5 flex max-w-full items-center justify-between gap-4 overflow-auto rounded-[0.625rem] bg-primary px-4 py-2 scrollbar-none">
            {sortedCountries.map((item, index) => (
              <p
                className="rounded-[0.3125rem] px-[0.31rem] py-[0.38] font-montserrat font-400 text-background transition-all hover:cursor-pointer hover:bg-background hover:font-600 hover:text-primary"
                key={index}
                onClick={() => handleLetterClick(item.letter)}
              >
                {item.letter}
              </p>
            ))}
          </div>

          {/* Countries List */}
          <div className="bar mt-10 max-h-[420px] columns-4 gap-8 overflow-x-auto overflow-y-hidden scroll-smooth pb-12">
            {sortedCountries.map((item, index) => (
              <div
                key={index}
                ref={(el) => {
                  // Assign a ref to each letter section
                  countriesRef.current[item.letter] = el;
                }}
                className="mb-3 flex flex-col gap-3"
              >
                {/* Country Letter Heading */}
                <p className="text-body-base font-semibold text-primary">
                  {item.letter}
                </p>

                {/* Country List */}
                <div className="flex flex-col gap-3">
                  {item.countries.map((country, index) => (
                    <Link
                      className="group flex gap-4"
                      key={index}
                      href={`/esim/${country.slug}/`}
                    >
                      {/* Flag */}
                      <div className="relative h-[24px] w-[34.5px] shadow-lg">
                        <Image
                          src={country.image_url}
                          alt={country.name}
                          className="rounded-[4px]"
                          fill
                          sizes="auto"
                          loading="lazy"
                        />
                      </div>
                      {/* Country Name */}
                      <p className="text-body-sm text-foreground-light transition-all group-hover:text-primary">
                        {country.name}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default RegionsCountriesCarousel;

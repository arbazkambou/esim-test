import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import { OrganizedCountry } from "@/helpers/generateSiteMap";

export interface Region {
  name: string;
  imgSrc: StaticImageData;
  href: string;
}

function RegionsCountriesCarouselMobile({
  countries,
  regions,
}: {
  countries: OrganizedCountry[];
  regions: Region[];
}) {
  const [tabsValue, setTabsValue] = useState("regions");

  useEffect(() => {
    if (tabsValue === "regions") {
      setTabsValue("countries");
    }
  }, []);

  function handleTabsValueChange(value: string) {
    setTabsValue(value);
  }

  return (
    <Tabs
      className="w-full"
      value={tabsValue}
      onValueChange={handleTabsValueChange}
    >
      <div className="flex justify-center">
        <TabsList className="flex items-center gap-2">
          <TabsTrigger value="countries">Countries</TabsTrigger>
          <TabsTrigger value="regions">Regions</TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="regions">
        <div>
          <h3 className="text-xl font-600">Regions</h3>
          <div className="mt-[2.5rem] flex flex-col justify-between gap-10">
            {regions.map((item, index) => (
              <Link
                className="group flex items-center gap-4"
                key={index}
                href={item.href}
              >
                <div className="relative h-[30px] w-[30px]">
                  <Image
                    src={item.imgSrc}
                    alt={`${item.name} eSIM`}
                    sizes="auto"
                    fill
                    loading="lazy"
                  />
                </div>
                <p className="text-body-sm text-foreground-light transition-all group-hover:text-primary">
                  {item.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </TabsContent>
      <TabsContent value="countries">
        <div>
          <h3 className="text-xl font-600">Countries</h3>

          {/* Letter Navigation */}
          <div className="mt-5 flex max-w-full items-center justify-between gap-4 overflow-auto rounded-[0.625rem] bg-primary px-4 py-2">
            {countries.map((item, index) => (
              <Link
                key={index}
                href={`#${item.letter}`}
                className="rounded-[0.3125rem] px-[0.31rem] py-[0.38] font-montserrat font-400 text-background transition-all hover:cursor-pointer hover:bg-background hover:font-600 hover:text-primary"
              >
                {item.letter}
              </Link>
            ))}
          </div>

          {/* Countries List */}
          <div className="bar mt-10 max-h-[420px] columns-2 gap-8 overflow-x-auto overflow-y-hidden scroll-smooth pb-12 md:columns-3">
            {countries.map((item, index) => (
              <div
                key={index}
                id={item.letter} // Section id for anchor navigation
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
                      <div className="relative h-[24px] w-[34.5px]">
                        <Image
                          src={country.image_url}
                          alt={country.name}
                          className="rounded-[4px] shadow-lg"
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
      </TabsContent>
    </Tabs>
  );
}

export default RegionsCountriesCarouselMobile;

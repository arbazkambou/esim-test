import { OrganizedCountry } from "@/helpers/generateSiteMap";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import { useState } from "react";

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
  const [activeLink, setActiveLink] = useState("");

  return (
    <Tabs className="w-full" defaultValue="countries">
      <div className="flex justify-center xl:hidden">
        <TabsList className="flex items-center gap-2">
          <TabsTrigger value="countries">Countries</TabsTrigger>
          <TabsTrigger value="regions">Regions</TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="regions">
        <>
          <h3 className="text-xl font-600">Regions</h3>
          <div className="mt-[2.5rem] flex flex-col gap-10">
            {regions.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="group flex items-center gap-4"
              >
                <div className="relative h-[30px] w-[30px]">
                  <Image
                    src={item.imgSrc}
                    alt={`${item.name} eSIM`}
                    fill
                    sizes="auto"
                    quality={20}
                  />
                </div>
                <p className="text-body-sm text-foreground-light transition-all group-hover:text-primary">
                  {item.name}
                </p>
              </Link>
            ))}
          </div>
        </>
      </TabsContent>

      <TabsContent
        value="countries"
        className="mt-[3.88rem] xl:grid xl:grid-cols-10"
      >
        <>
          <aside className="hidden xl:col-span-2 xl:block">
            <h3 className="text-xl font-600">Regions</h3>
            <div className="mt-[2.5rem] flex flex-col gap-10">
              {regions.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="group flex items-center gap-4"
                >
                  <div className="relative h-[30px] w-[30px]">
                    <Image
                      src={item.imgSrc}
                      alt={`${item.name} eSIM`}
                      fill
                      sizes="auto"
                      loading="lazy"
                      quality={75}
                    />
                  </div>
                  <p className="text-body-sm text-foreground-light transition-all group-hover:text-primary">
                    {item.name}
                  </p>
                </Link>
              ))}
            </div>
          </aside>

          <main className="xl:col-span-8">
            <h3 className="text-xl font-600">Countries</h3>
            <nav className="mt-5 flex max-w-full items-center justify-between gap-4 overflow-auto rounded-[0.625rem] bg-primary px-4 py-2 scrollbar-none">
              {countries.map((item, i) => (
                <Link
                  key={i}
                  href={`#${item.letter}`}
                  onClick={() => setActiveLink(item.letter)}
                >
                  <p
                    className={`rounded-[0.3125rem] px-[0.31rem] py-[0.38] font-montserrat font-400 text-background transition-all hover:cursor-pointer hover:bg-background hover:font-600 hover:text-primary ${activeLink === item.letter && "bg-background font-600 text-primary"}`}
                  >
                    {item.letter}
                  </p>
                </Link>
              ))}
            </nav>

            <div className="bar mt-10 max-h-[420px] columns-2 gap-8 overflow-auto scroll-smooth pb-12 md:columns-3 xl:columns-4">
              {countries.map((item, i) => (
                <section
                  key={i}
                  id={item.letter}
                  className="mb-3 flex flex-col gap-3"
                >
                  <h4 className="text-body-base font-semibold text-primary">
                    {item.letter}
                  </h4>
                  <div className="flex flex-col gap-3">
                    {item.countries.map((country, j) => (
                      <Link
                        key={j}
                        href={`/esim/${country.slug}/`}
                        className="group flex gap-4"
                      >
                        <div className="relative h-[24px] w-[34.5px]">
                          <Image
                            src={country.image_url}
                            alt={country.name}
                            className="rounded-[4px] shadow-lg"
                            fill
                            sizes="auto"
                            quality={70}
                          />
                        </div>
                        <p className="text-body-sm text-foreground-light transition-all group-hover:text-primary">
                          {country.name}
                        </p>
                      </Link>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </main>
        </>
      </TabsContent>
    </Tabs>
  );
}

export default RegionsCountriesCarouselMobile;

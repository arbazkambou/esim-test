"use client";
import { OrganizedCountry } from "@/helpers/generateSiteMap";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import React, { useState, useRef } from "react";
import Reveal from "@/animations/Reveal";
import { cardVariantPrimary } from "@/animations/animations";

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
  const containerRef = useRef<HTMLDivElement>(null);

  const handleLetterClick = (
    e: React.MouseEvent<HTMLDivElement>,
    letter: string,
  ) => {
    e.preventDefault();
    const targetElement = document.getElementById(letter);
    if (targetElement && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const targetRect = targetElement.getBoundingClientRect();
      const horizontalOffset = targetRect.left - containerRect.left;
      containerRef.current.scrollTo({
        left: containerRef.current.scrollLeft + horizontalOffset,
        top: containerRef.current.scrollTop,
        behavior: "smooth",
      });
    }
    setActiveLink(letter);
  };

  return (
    <Tabs className="w-full" defaultValue="countries">
      <div className="flex justify-center xl:hidden">
        <TabsList className="flex w-[230px] items-center gap-2">
          <TabsTrigger value="countries" className="w-full">
            Countries
          </TabsTrigger>
          <TabsTrigger value="regions" className="w-full">
            Regions
          </TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="regions">
        <Reveal variants={cardVariantPrimary} className="w-full">
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
        </Reveal>
      </TabsContent>

      <TabsContent value="countries" className="mt-[3.5rem]">
        <Reveal
          variants={cardVariantPrimary}
          className="w-full xl:grid xl:grid-cols-10"
        >
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
                <div key={i} onClick={(e) => handleLetterClick(e, item.letter)}>
                  <p
                    className={`rounded-[0.3125rem] px-[0.31rem] py-[0.38] font-montserrat font-400 text-background transition-all hover:cursor-pointer hover:bg-background hover:font-600 hover:text-primary ${
                      activeLink === item.letter
                        ? "bg-background font-600 text-primary"
                        : ""
                    }`}
                  >
                    {item.letter}
                  </p>
                </div>
              ))}
            </nav>

            <div
              ref={containerRef}
              className="bar mt-10 flex max-h-[400px] max-w-full flex-col flex-wrap gap-x-10 gap-y-4 overflow-auto scroll-smooth pb-12"
            >
              {countries.map((item, index) => (
                <React.Fragment key={index}>
                  <div
                    id={item.letter}
                    className="text-sm font-500 text-primary"
                    key={index}
                  >
                    {item.letter}
                  </div>
                  {item.countries.map((country, j) => (
                    <Link
                      key={j}
                      href={`/esim/${country.slug}/`}
                      className="group flex min-w-[200px] max-w-[200px] gap-4"
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
                </React.Fragment>
              ))}
            </div>
          </main>
        </Reveal>
      </TabsContent>
    </Tabs>
  );
}

export default RegionsCountriesCarouselMobile;

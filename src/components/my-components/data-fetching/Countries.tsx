"use client";

import { pricingCardVariants } from "@/animations/animations";
import RevealAuto from "@/animations/RevealAuto";
import StartingPriceCard from "@/components/features/packages/StartingPriceCard";
import { Country } from "@/helpers/generateSiteMap";
import { usePathname } from "next/navigation";

interface PropsType {
  countries: Country[];
}

function Countries({ countries }: PropsType) {
  const pathName = usePathname();
  const isAllSims = ["/esim/", "/data-voice-sms/"].includes(pathName);
  const displayedCountries = isAllSims ? countries : countries.slice(0, 16);

  return (
    <div className="grid gap-x-[1.2rem] gap-y-[1.3rem] sm:grid-cols-2 md:gap-y-[2rem] lg:grid-cols-3 xl:grid-cols-4">
      {displayedCountries.map((country, index) => (
        <RevealAuto key={index} variants={pricingCardVariants} custom={index}>
          <StartingPriceCard country={country} />
        </RevealAuto>
      ))}
    </div>
  );
}

export default Countries;

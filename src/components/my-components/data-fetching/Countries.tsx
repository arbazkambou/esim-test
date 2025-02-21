"use client";

import StartingPriceCard from "@/components/features/packages/country/StartingPriceCard";

import { Country } from "@/helpers/generateSiteMap";
import { usePathname } from "next/navigation";

interface PropsType {
  countries: Country[];
}

function Countries({ countries }: PropsType) {
  const pathName = usePathname();
  const isAllSims = ["/esim/", "/data-voice-sms/"].includes(pathName);
  return (
    <div className="grid gap-x-[1.2rem] gap-y-[1.3rem] sm:grid-cols-2 md:gap-y-[2rem] lg:grid-cols-3 xl:grid-cols-4">
      {/* Card  */}
      {isAllSims
        ? countries.map((country, index) => (
            <StartingPriceCard key={index} country={country} />
          ))
        : countries
            .slice(0, 16)
            .map((country, index) => (
              <StartingPriceCard key={index} country={country} />
            ))}
      {}
    </div>
  );
}

export default Countries;

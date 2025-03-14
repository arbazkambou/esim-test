"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CountryRegionSearch from "./CountryRegionSearch";
import { Tabs, TabsTrigger } from "@/components/ui/tabs";
import { TabsList } from "@radix-ui/react-tabs";

interface PropsType {
  tabsLinks: { href: string; label: string }[];
}
function CountryRegionNavigation({ tabsLinks }: PropsType) {
  const pathName = usePathname();

  return (
    <section className="container mt-16 flex w-full flex-col gap-[2.31rem] xl:flex-row xl:justify-between xl:gap-[4rem]">
      <div className="flex items-center justify-center gap-[1.5rem] md:gap-[2rem] xl:order-2 xl:justify-end xl:gap-[1rem]">
        <Tabs className="w-full xs:w-max">
          <TabsList className="flex w-full items-center justify-between xs:gap-6">
            <Link href={"/esim"} scroll={false}>
              <TabsTrigger
                value=""
                className={`${["/esim/", "/global/", "/regional/"].includes(pathName) && "bg-primary text-background"} font-500`}
              >
                Data Only eSIMs
              </TabsTrigger>
            </Link>

            <Link href={"/data-voice-sms"} className="relative" scroll={false}>
              <TabsTrigger
                value=""
                className={`font-500 ${["/data-voice-sms/", "/data-voice-sms/regional/", "/international-esim/"].includes(pathName) && "bg-primary text-background"}`}
              >
                Data + Voice eSIMs
                <span className="absolute -top-3 left-1 rounded-pill bg-primary-accent px-1 text-body-sm font-600 !text-foreground">
                  Popular
                </span>
              </TabsTrigger>
            </Link>
          </TabsList>
        </Tabs>
      </div>

      {/* search input  */}
      <div className="flex justify-center xl:order-1 xl:w-full xl:justify-start">
        <div className={`w-[98%] xs:w-[90%] md:w-[80%] xl:w-full`}>
          <CountryRegionSearch />
        </div>
      </div>

      {/* pages links  */}
      <div className="flex w-full items-center justify-center gap-[0.2rem] xs:gap-[0.5rem] md:gap-[1rem] xl:-order-1 xl:justify-start">
        {tabsLinks.map((item, index) => (
          <Link href={item.href} key={index} scroll={false}>
            <Button
              variant={"secondary"}
              className={`rounded-full border border-muted-foreground ${pathName === item.href && "border-primary bg-primary text-background"} text-sm font-400 hover:bg-primary`}
              size={"link"}
            >
              {item.label}
            </Button>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default CountryRegionNavigation;

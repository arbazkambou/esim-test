"use client";

import globalHero from "@/_assets/images/globalHero.png";
import greenStar from "@/_assets/svgs/greenStar.svg";
import CheckCompatibilityModal from "@/components/my-components/modals/CheckCompatibilityModal";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RadioGroup } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { GlobalPackagesMeta } from "@/types/packages/data-only/DataOnlyGlobalPackages";
import { ArrowUpLeft, ListFilter, Minus, Plane, Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import GlobalPackageCard from "./GlobalPackageCard";

function GlobalPackagesList({ packages }: { packages: GlobalPackagesMeta }) {
  const [value, setValue] = useState("");
  const [isUnlimited, setIsUnlimited] = useState(false);

  function handleValueChange(value: string) {
    setValue(value);
  }

  function handleCheckChange(check: boolean) {
    setIsUnlimited(() => check);
  }
  const isUnlimitedPackages = packages.data.find(
    (item) => item.unlimited === true,
  );
  return (
    <div className="grid gap-x-10 gap-y-10 xl:grid-cols-2">
      {/* Hero image  */}
      <div>
        <div>
          <Card className="flex flex-col gap-4 rounded-[2.5rem] p-4 xl:rounded-b-none xl:rounded-t-[2.5rem]">
            <h1 className="flex flex-col items-center gap-2 xl:items-start">
              <span className="flex items-center gap-1 text-body-base font-500 text-muted-foreground">
                <span>Global Travel</span>
                <Plane />
              </span>
              <span className="flex items-center gap-2">
                <span className="font-montserrat text-h1-base font-700 md:text-h1-md">
                  eSIM For Global Travel
                </span>
              </span>
            </h1>
            <p className="text-start text-body-sm md:text-body-base xl:hidden">
              Get the best eSIM for global travel from eSIMCard. Enjoy seamless
              connectivity and affordable unlimited data plans. Stay connected
              wherever you go.
            </p>
          </Card>

          <div className="relative hidden w-full xl:flex xl:h-[655px]">
            <Image
              src={globalHero}
              fill
              sizes="auto"
              alt="Global eSIMs"
              className="rounded-b-[2.5rem]"
            />
            <div className="z-20 flex items-center justify-center xl:absolute xl:bottom-6 xl:text-background xl:opacity-95">
              <p className="mx-4 text-center text-body-md">
                Get the best eSIM for global travel from eSIMCard. Enjoy
                seamless connectivity and affordable unlimited data plans. Stay
                connected wherever you go.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Package side  */}
      <div className="flex flex-col gap-[2rem]">
        <p className="flex items-center justify-center gap-4 text-xs xl:justify-start">
          <span className="font-700">Excellent</span>
          <span>
            <span className="font-700">4.8</span> out of 5
          </span>
          <span className="flex items-center gap-1 font-700">
            <Image
              src={greenStar}
              alt="Trustpilot Rating"
              height={14}
              width={13}
              sizes="auto"
            />
            Trustpilot
          </span>
        </p>
        <h2 className="text-center font-montserrat text-lg font-600 md:text-[1.25rem] xl:text-start">
          Pick the Best eSIM Plans for Global Travel
        </h2>
        {/* Package switch  */}
        {isUnlimitedPackages && (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-body-sm font-500">
              <p
                className={`${isUnlimited ? "text-muted-foreground" : "text-foreground opacity-80"}`}
              >
                Standard Plan
              </p>
              <Switch
                className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-primary"
                checked={isUnlimited}
                onCheckedChange={handleCheckChange}
              />
              <p
                className={`${isUnlimited ? "text-foreground" : "text-muted-foreground opacity-80"}`}
              >
                Unlimited Data
              </p>
            </div>
            <ListFilter size={24} />
          </div>
        )}

        {/* Pricing cards  */}
        <div>
          <RadioGroup
            value={value}
            onValueChange={handleValueChange}
            className={`barMini mt-4 max-h-[490px] grid-cols-2 gap-x-4 gap-y-8 overflow-auto pe-2 pt-8 md:grid-cols-3 ${isUnlimited && "hidden"} pb-8`}
          >
            {packages.data
              .filter((item) => !item.unlimited)
              .map((item, index) => (
                <GlobalPackageCard
                  key={index}
                  packageDetail={item}
                  index={index}
                  handleValueChange={handleValueChange}
                  value={value}
                />
              ))}
          </RadioGroup>
          <RadioGroup
            value={value}
            onValueChange={handleValueChange}
            className={`barMini mt-4 grid max-h-[440px] grid-cols-2 gap-x-4 gap-y-10 overflow-auto pe-2 pt-8 md:grid-cols-3 ${!isUnlimited && "hidden"}`}
          >
            {packages.data
              .filter((item) => item.unlimited)
              .map((item, index) => (
                <GlobalPackageCard
                  key={index}
                  packageDetail={item}
                  index={index}
                  handleValueChange={handleValueChange}
                  value={value}
                />
              ))}
          </RadioGroup>
        </div>

        {/* Increament decreament buttons  */}
        <div className="flex items-center justify-between gap-4 xl:gap-6">
          <Card className="flex h-full w-max items-center gap-3 rounded-sm px-2 text-[1.25rem] xl:gap-4">
            <button className="rounded-sm p-1 hover:bg-muted xl:p-2">
              <Plus />
            </button>
            <div className="h-[50%] w-[0.1px] bg-muted-foreground opacity-60"></div>
            <p>1</p>
            <div className="h-[50%] w-[0.1px] bg-muted-foreground opacity-60"></div>
            <button className="rounded-sm p-1 hover:bg-muted xl:p-2">
              <Minus />
            </button>
          </Card>

          <div className="h-full w-full">
            <Button
              className={`group flex h-full w-full items-center gap-3 text-sm`}
            >
              <ArrowUpLeft
                className="transition group-hover:rotate-90 group-hover:text-foreground"
                size={20}
              />
              Add To Cart
            </Button>
          </div>
        </div>

        {/* Check compatibility  */}
        <CheckCompatibilityModal />
      </div>
    </div>
  );
}

export default GlobalPackagesList;

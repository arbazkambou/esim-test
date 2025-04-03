import hero from "@/_assets/images/hero.png";
import fiveStars from "@/_assets/svgs/5Star.svg";
import FlagHoverComponent from "@/animations/FlagHoverComponent";
import SocialsButtons from "@/components/my-components/shared/SocialsButtons";
import { Button } from "@/components/ui/button";
import { ArrowUpLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CountryRegionSearch from "../../shared/CountryRegionSearch";

function HomeHero() {
  return (
    <section className="container mt-10 grid gap-14 bg-background xl:grid-cols-[1fr_minmax(516px,516px)]">
      {/* Left Side: Text Content */}
      <div className="self-center">
        <div className="space-y-10 md:space-y-12">
          {/* Headings and text */}
          <div className="flex flex-col gap-6">
            <h1 className="text-center font-montserrat text-4xl md:text-start xl:text-6xl">
              <span className="font-700 text-foreground">eSIM</span> Card <br />
              We <span className="font-700 text-foreground">Connect</span>{" "}
              <br />
              You <span className="font-700 text-primary">Globally</span>
            </h1>
            <p className="text-sm opacity-80 xl:text-xl">
              Travel Smart with Affordable eSIM Data Plans and High Speed
              Internet. Our eSIMs Offer Coverage in Nearly Every Corner of the
              World!
            </p>
          </div>

          {/* Flags with Hover Effect */}
          <div className="flex justify-center md:justify-start">
            <FlagHoverComponent />
          </div>

          {/* Search Country Region */}
          <div className="relative top-2 flex flex-col gap-4 xl:flex-row xl:items-center">
            <CountryRegionSearch />
            <Link href={"/esim"} className="w-full xl:w-max">
              <Button className="group flex w-full items-center gap-3 text-sm">
                <ArrowUpLeft
                  className="transition group-hover:rotate-90 group-hover:text-foreground"
                  size={20}
                />
                Explore all Countries
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Right Side: Hero Image */}
      <div className="hidden shrink-0 xl:block">
        <div className="relative h-[606px] w-full">
          <Image
            src={hero}
            fill
            alt="eSIM Card We Connect You Globally"
            className="rounded-[1.8125rem] object-contain"
            sizes="auto"
            // priority
            quality={70}
          />

          <div className="relative top-[490px] z-20 flex items-center justify-center">
            <SocialsButtons />
          </div>

          <div className="relative top-[500px] flex items-center justify-center gap-6">
            <div className="relative h-[18px] w-[148px]">
              <Image src={fiveStars} alt="eSIM Card Rating" fill sizes="auto" />
            </div>
            <p className="mt-1 text-[8px] font-600 text-background opacity-90 lg:text-xs">
              500,000+ Downloads
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;

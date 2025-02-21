import PrimaryButton from "@/components/my-components/buttons/PrimaryButton";
import CountriesWithDataVoiceStarting from "@/components/my-components/data-fetching/CountriesWithDataVoice";
import CountriesWithStarting from "@/components/my-components/data-fetching/CountriesWithDataOnly";
import { PackageCardSkelton } from "@/components/my-components/fallbacks/PackageCardSkelton";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Suspense } from "react";

function CountriesSection() {
  return (
    <section className="container mt-16 bg-background">
      <Tabs defaultValue="data">
        <div className="flex flex-col gap-[2.38rem]">
          {/* Text and heading  */}
          <div className="flex flex-col gap-5">
            <h2 className="text-center font-montserrat text-h2-base font-600 md:text-start md:text-h2-md xl:text-h2-xl">
              Which Country is Calling you?
            </h2>
            <p className="text-center text-body-sm text-muted-foreground md:text-start md:text-body-md">
              Show Me eSlM PlansFind the Perfect Data Plan with eSIMCard
            </p>
          </div>

          {/* Links and buttons */}
          <div className="flex flex-col gap-[2.38rem] md:flex-row md:gap-[1.8rem] lg:justify-between">
            <TabsList className="flex items-center justify-between md:gap-[1.56rem]">
              <TabsTrigger value="data" asChild>
                <Button
                  variant={"secondary"}
                  className="rounded-full px-6 font-500"
                >
                  Data Only eSIMs
                </Button>
              </TabsTrigger>
              <TabsTrigger value="voice" asChild>
                <Button
                  variant={"secondary"}
                  className="relative rounded-full px-6 font-500"
                >
                  Data + Voice eSIMs{" "}
                  <span className="absolute -top-3 left-1 rounded-pill bg-primary-accent px-1 text-body-sm font-600 text-foreground">
                    Popular
                  </span>
                </Button>
              </TabsTrigger>
            </TabsList>
            {/* button  */}
            <div className="hidden w-full items-center justify-center md:flex md:w-max">
              <PrimaryButton label="View All Destinations" href="/esim" />
            </div>
          </div>

          {/* Data Only Packages  */}
          <TabsContent value="data">
            <Suspense
              fallback={
                <div className="grid gap-x-[1.2rem] gap-y-[1rem] sm:grid-cols-2 md:gap-y-[1.5rem] lg:grid-cols-3 xl:grid-cols-4">
                  {Array.from({ length: 20 }).map((item, index) => (
                    <PackageCardSkelton key={index} />
                  ))}
                </div>
              }
            >
              <CountriesWithStarting />
            </Suspense>
          </TabsContent>

          {/* Data voice packages  */}
          <TabsContent value="voice">
            <Suspense
              fallback={
                <div className="grid gap-x-[1.2rem] gap-y-[1rem] sm:grid-cols-2 md:gap-y-[1.5rem] lg:grid-cols-3 xl:grid-cols-4">
                  {Array.from({ length: 20 }).map((item, index) => (
                    <PackageCardSkelton key={index} />
                  ))}
                </div>
              }
            >
              <CountriesWithDataVoiceStarting />
            </Suspense>
          </TabsContent>

          <div className="flex items-center justify-center md:hidden">
            <PrimaryButton label="View All Destinations" href="/esim" />
          </div>
        </div>
      </Tabs>
    </section>
  );
}

export default CountriesSection;

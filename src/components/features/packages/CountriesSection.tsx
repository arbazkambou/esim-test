import PrimaryButton from "@/components/my-ui/buttons/PrimaryButton";
import { PackageCardSkelton } from "@/components/my-ui/fallbacks/PackageCardSkelton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Suspense } from "react";
import TabContent from "./TabContent";
import CountriesWithDataVoice from "./CountriesWithDataVoice";
import CountriesWithDataOnly from "./CountriesWithDataOnly";

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
              Find the Perfect Data Plan with eSIMCard
            </p>
          </div>

          {/* Links and buttons */}
          <div className="flex flex-col gap-[2.38rem] md:flex-row md:justify-between md:gap-[1.8rem]">
            <TabsList className="flex items-center justify-between gap-6 sm:gap-[1.56rem]">
              <TabsTrigger value="data" className="w-full font-500">
                Data Only eSIMs
              </TabsTrigger>
              <TabsTrigger value="voice" className="relative w-full font-500">
                Data + Voice eSIMs
                <span className="absolute -top-3 left-1 rounded-pill bg-primary-accent px-1 text-body-sm font-600 text-foreground">
                  Popular
                </span>
              </TabsTrigger>
            </TabsList>

            <div className="hidden items-center md:flex">
              <TabsContent value="voice">
                <PrimaryButton
                  label="View All Destinations"
                  href="/data-voice-sms/"
                />
              </TabsContent>

              <TabsContent value="data">
                <PrimaryButton label="View All Destinations" href="/esim/" />
              </TabsContent>
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
              <CountriesWithDataOnly />
            </Suspense>
          </TabsContent>

          <TabContent value="voice">
            <Suspense
              fallback={
                <div className="grid gap-x-[1.2rem] gap-y-[1rem] sm:grid-cols-2 md:gap-y-[1.5rem] lg:grid-cols-3 xl:grid-cols-4">
                  {Array.from({ length: 20 }).map((item, index) => (
                    <PackageCardSkelton key={index} />
                  ))}
                </div>
              }
            >
              <CountriesWithDataVoice />
            </Suspense>
          </TabContent>

          <div className="flex w-full items-center justify-center md:hidden">
            <TabsContent value="voice">
              <PrimaryButton
                label="View All Destinations"
                href="/data-voice-sms/"
              />
            </TabsContent>

            <TabsContent value="data">
              <PrimaryButton label="View All Destinations" href="/esim/" />
            </TabsContent>
          </div>
        </div>
      </Tabs>
    </section>
  );
}

export default CountriesSection;

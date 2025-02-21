"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CountryPackagesMeta } from "@/types/packages/data-only/DataOnlyCountryPackages";

function PagesMeta({ packages }: { packages: CountryPackagesMeta }) {
  const { name } = packages.data;
  return (
    <Tabs
      defaultValue="feature"
      className="flex w-full flex-col justify-center"
    >
      <TabsList className="barMini mb-4 flex w-[340px] items-center justify-between gap-2 overflow-x-auto pb-3 xs:w-[400px] sm:w-full">
        {packages.page_features && (
          <TabsTrigger value="feature" className="w-full px-3 py-3">
            Feature
          </TabsTrigger>
        )}

        <TabsTrigger value="description" className="w-full px-3 py-3">
          Description
        </TabsTrigger>

        <TabsTrigger value="specs" className="w-full px-3 py-3">
          Technical Specs
        </TabsTrigger>
      </TabsList>
      {packages.page_features && (
        <TabsContent value="feature" className="flex w-full flex-col gap-1.5">
          <h2 className="text-h2-base font-500">{name} eSIM Key Features</h2>
          <div className="custom-list text-body-base -tracking-[0.04rem]">
            <div dangerouslySetInnerHTML={{ __html: packages.page_features }} />
          </div>
        </TabsContent>
      )}
      {packages.page_description && (
        <TabsContent value="description" className="flex w-full flex-col gap-2">
          <h2 className="text-h2-base font-500">{name} eSIM Key Features</h2>
          <div className="custom-list text-body-base -tracking-[0.04rem]">
            <div
              dangerouslySetInnerHTML={{
                __html: packages.page_description,
              }}
            />
          </div>
        </TabsContent>
      )}
      {packages.page_technical_specs && (
        <TabsContent value="specs" className="flex w-full flex-col gap-2">
          <h2 className="text-h2-base font-500">
            Our Virtual SIM Specifications
          </h2>
          <div className="custom-list -tracking-[0.04rem]">
            <div
              dangerouslySetInnerHTML={{
                __html: packages.page_technical_specs,
              }}
            />
          </div>
        </TabsContent>
      )}
    </Tabs>
  );
}

export default PagesMeta;

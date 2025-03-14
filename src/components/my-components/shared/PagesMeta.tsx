"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PackagesData } from "@/types/packages/data-only/DataOnlyCountryPackages";

function PagesMeta({ packages }: { packages: PackagesData }) {
  const { name } = packages.data;
  return (
    <Tabs
      defaultValue="feature"
      className="flex w-full flex-col justify-center"
    >
      <TabsList className="overflow-x- mb-4 flex items-center justify-between gap-2 px-0 pb-3 scrollbar-none">
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
          <h2 className="text-h2-base font-500 text-foreground-light">
            {name} eSIM Key Features
          </h2>
          <div className="custom-list text-body-base -tracking-[0.04rem] text-muted-foreground">
            <div dangerouslySetInnerHTML={{ __html: packages.page_features }} />
          </div>
        </TabsContent>
      )}
      {packages.page_description && (
        <TabsContent value="description" className="flex w-full flex-col gap-2">
          <h2 className="text-h2-base font-500 text-foreground-light">
            {name} eSIM Key Features
          </h2>
          <div className="custom-list text-body-base -tracking-[0.04rem] text-muted-foreground">
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
          <h2 className="text-h2-base font-500 text-foreground-light">
            Our Virtual SIM Specifications
          </h2>
          <div className="custom-list -tracking-[0.04rem] text-muted-foreground">
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

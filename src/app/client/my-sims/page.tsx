import { PageParams } from "@/app/page";
import MyEsims from "@/components/pages/MyEsims";
import { seoData } from "@/lib/seoConfig";
import { Metadata } from "next";
import { Suspense } from "react";

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const localizedSeo = seoData[params.locale] || seoData["en"];
  return localizedSeo.mySims;
}

function Page() {
  return (
    <Suspense fallback={""}>
      <MyEsims />
    </Suspense>
  );
}

export default Page;

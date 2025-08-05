import RefillPage from "@/components/pages/RefillPage";
import { PageParams } from "../page";
import { Metadata } from "next";
import { seoData } from "@/lib/seoConfig";
import { Suspense } from "react";

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const localizedSeo = seoData[params.locale] || seoData["en"];
  return localizedSeo.refill;
}

function Page() {
  return (
    <Suspense fallback={""}>
      <RefillPage />
    </Suspense>
  );
}

export default Page;

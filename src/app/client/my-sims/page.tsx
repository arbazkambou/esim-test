import { PageParams } from "@/app/page";
import MyEsims from "@/components/pages/MyEsims";
import { seoData } from "@/lib/seoConfig";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const localizedSeo = seoData[params.locale] || seoData["en"];
  return localizedSeo.mySims;
}

function Page() {
  return <MyEsims />;
}

export default Page;

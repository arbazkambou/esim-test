import { Metadata } from "next";
import { PageParams } from "../page";
import { seoData } from "@/lib/seoConfig";

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const localizedSeo = seoData[params.locale] || seoData["en"];
  return localizedSeo.careers;
}

function Page() {
  return <div>Career page</div>;
}

export default Page;

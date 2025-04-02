import { Metadata } from "next";
import { PageParams } from "../page";
import { seoData } from "@/lib/seoConfig";

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const localizedSeo = seoData[params.locale] || seoData["en"];
  return localizedSeo.refundPolicy;
}

function Page() {
  return <div>Refund Policy page</div>;
}

export default Page;

import RedeemPage from "@/components/pages/RedeemPage";
import { seoData } from "@/lib/seoConfig";
import { Metadata } from "next";
import { PageParams } from "../page";

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const localizedSeo = seoData[params.locale] || seoData["en"];
  return localizedSeo.redeem;
}

function Page() {
  return <RedeemPage />;
}

export default Page;

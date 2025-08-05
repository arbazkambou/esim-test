import RegisterPage from "@/components/pages/RegisterPage";
import { PageParams } from "../page";
import { Metadata } from "next";
import { seoData } from "@/lib/seoConfig";

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const localizedSeo = seoData[params.locale] || seoData["en"];
  return localizedSeo.register;
}

function Page() {
  return <RegisterPage />;
}

export default Page;

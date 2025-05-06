import HelpCenterPage from "@/components/pages/HelpCenterPage";
import { getHelpCenterQuestionsAndCategories } from "@/services/support/HelpCenterApis";
import { PageParams } from "../page";
import { Metadata } from "next";
import { seoData } from "@/lib/seoConfig";

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const localizedSeo = seoData[params.locale] || seoData["en"];
  return localizedSeo.helpCenter;
}

async function Page() {
  const data = await getHelpCenterQuestionsAndCategories();

  return (
    <>
      <HelpCenterPage data={data} />
    </>
  );
}

export default Page;

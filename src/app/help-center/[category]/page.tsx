import HelpCenterPage from "@/components/pages/HelpCenterPage";
import { cleanString } from "@/helpers/cleanString";
import { generateDynamicSeo } from "@/helpers/generateDynamicSeo";
import { getHelpCenterQuestionsAndCategories } from "@/services/support/HelpCenterApis";
import { notFound } from "next/navigation";

interface PageProps {
  params: { category: string };
}

export async function generateMetadata({ params }: PageProps) {
  let helpCenterData;
  try {
    helpCenterData = await getHelpCenterQuestionsAndCategories(params.category);
  } catch (error) {
    if (
      error instanceof Error &&
      cleanString(error.message).includes("not found")
    ) {
      throw notFound();
    } else {
      throw error;
    }
  }

  const { meta_title, meta_description } = helpCenterData.data;

  return generateDynamicSeo({
    meta_title,
    meta_description,
    meta_keywords: null,
    url: `https://esimcard.com/help-center/${params.category}/`,
    image: "https://esimcard.com/images/logo-1x1-new.png",
    publishedTime: null,
    modifiedTime: null,
  });
}

async function Page({ params }: { params: { category: string } }) {
  const data = await getHelpCenterQuestionsAndCategories(params.category);

  return (
    <>
      <HelpCenterPage data={data} isCategory={true} />
    </>
  );
}

export default Page;

import HelpCenterPage from "@/components/pages/HelpCenterPage";
import { getHelpCenterQuestionsAndCategories } from "@/services/support/HelpCenterApis";

async function Page({ params }: { params: { category: string } }) {
  const data = await getHelpCenterQuestionsAndCategories(params.category);

  return (
    <>
      <HelpCenterPage data={data} isCategory={true} />
    </>
  );
}

export default Page;

import HelpCenterPage from "@/components/pages/HelpCenterPage";
import { getHelpCenterQuestionsAndCategories } from "@/services/support/HelpCenterApis";

export const revalidate = 86400;

async function Page() {
  const data = await getHelpCenterQuestionsAndCategories();

  return (
    <>
      <HelpCenterPage data={data} />
    </>
  );
}

export default Page;

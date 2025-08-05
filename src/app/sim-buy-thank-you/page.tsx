import ThankYouPage from "@/components/pages/ThankYouPage";
import { PageParams } from "../page";
import { seoData } from "@/lib/seoConfig";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const localizedSeo = seoData[params.locale] || seoData["en"];
  return localizedSeo.thankYou;
}

interface PropsType {
  searchParams: {
    status: string;
  };
}
function Page({ searchParams }: PropsType) {
  return <ThankYouPage paymentStatus={searchParams.status} />;
}

export default Page;

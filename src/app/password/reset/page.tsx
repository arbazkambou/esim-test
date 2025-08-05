import PasswordResetPage from "@/components/pages/PasswordResetPage";
import { PageParams } from "../../page";
import { Metadata } from "next";
import { seoData } from "@/lib/seoConfig";

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const localizedSeo = seoData[params.locale] || seoData["en"];
  return localizedSeo.passwordReset;
}

function Page() {
  return <PasswordResetPage />;
}

export default Page;

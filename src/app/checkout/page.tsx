import CheckoutPage from "@/components/pages/CheckoutPage";
import { seoData } from "@/lib/seoConfig";
import { Metadata } from "next";
import { PageParams } from "../page";

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const localizedSeo = seoData[params.locale] || seoData["en"];
  return localizedSeo.cart;
}

function Page() {
  return (
    // <AnimatedLayout>
    <CheckoutPage />
    // </AnimatedLayout>
  );
}

export default Page;

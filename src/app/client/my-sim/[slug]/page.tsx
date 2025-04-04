import { PageParams } from "@/app/page";
import DataOnlyEsimDetailPage from "@/components/pages/DataOnlyEsimDetailPage";
import { seoData } from "@/lib/seoConfig";
import { Metadata } from "next";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const localizedSeo = seoData[params.locale] || seoData["en"];
  return localizedSeo.mySimDetail;
}

function Page({ params }: { params: { slug: string } }) {
  return <DataOnlyEsimDetailPage params={params} />;
}

export default Page;

export function generateDynamicSeo(seoData: {
  meta_title: string | null;
  meta_description: string | null;
  meta_keywords: string | null;
  url: string;
  image: string;
  publishedTime: string | null;
  modifiedTime: string | null;
}) {
  return {
    title: seoData.meta_title,
    description: seoData.meta_description,
    keywords: seoData.meta_keywords,
    openGraph: {
      title: seoData.meta_title,
      description: seoData.meta_description,
      url: seoData.url,
      siteName: "eSim Card",
      images: seoData.image,
      type: "article",
      publishedTime: seoData.publishedTime,
      modifiedTime: seoData.modifiedTime,
    },
    twitter: {
      card: "summary",
      site: "@esimcard",
      title: seoData.meta_title,
      description: seoData.meta_description,
      images: seoData.image,
    },
    alternates: {
      canonical: seoData.url,
    },
  };
}

import { Metadata } from "next";

export function generateDynamicSeo(seoData: {
  meta_title: string | null;
  meta_description: string | null;
  meta_keywords: string | null;
  url: string;
  image: string;
  publishedTime: string | null;
  modifiedTime: string | null;
}): Metadata {
  const {
    meta_title,
    meta_description,
    image,
    meta_keywords,
    modifiedTime,
    publishedTime,
    url,
  } = seoData;
  return {
    title: meta_title,
    description: meta_description,
    keywords: meta_keywords,
    openGraph: {
      title: meta_title ? meta_title : undefined,
      description: meta_description ? meta_description : undefined,
      url: url,
      siteName: "eSim Card",
      images: image,
      type: "article",
      publishedTime: publishedTime ? publishedTime : undefined,
      modifiedTime: modifiedTime ? modifiedTime : undefined,
    },
    twitter: {
      card: "summary",
      site: "@esimcard",
      title: meta_title ? meta_title : undefined,
      description: meta_description ? meta_description : undefined,
      images: image,
    },
    alternates: {
      canonical: url,
      languages: {
        "en-US": url,
        en: url,
        "x-default": url,
      },
    },
  };
}

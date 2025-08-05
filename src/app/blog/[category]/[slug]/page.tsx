import BlogDetailPage from "@/components/features/blog/BlogDetailPage";
import { cleanString } from "@/helpers/cleanString";
import { generateDynamicSeo } from "@/helpers/generateDynamicSeo";
import { getBlogDetail } from "@/services/blogs/blogApis";
import { notFound } from "next/navigation";

interface PageProps {
  params: { slug: string; category: string };
}

export async function generateMetadata({ params }: PageProps) {
  let blogData;
  try {
    blogData = await getBlogDetail({
      slug: params.slug,
      categorySlug: params.category,
    });
  } catch (error) {
    if (
      error instanceof Error &&
      cleanString(error.message).includes("not found")
    ) {
      return notFound();
    } else {
      throw error;
    }
  }

  const {
    name: meta_title,
    sub_content: meta_description,
    keywords: meta_keywords,
    thumbnail: image_url,
    created_at,
    updated_at,
  } = blogData.blog;

  return generateDynamicSeo({
    meta_title,
    meta_description,
    meta_keywords,
    url: `https://esimcard.com/blog/${params.category}/${params.slug}/`,
    image: image_url || "https://esimcard.com/images/logo-1x1-new.png",
    publishedTime: created_at || updated_at || new Date().toISOString(),
    modifiedTime: created_at || updated_at || new Date().toISOString(),
  });
}

async function Page({ params }: PageProps) {
  let blogData;
  try {
    blogData = await getBlogDetail({
      slug: params.slug,
      categorySlug: params.category,
    });
  } catch (error) {
    if (
      error instanceof Error &&
      cleanString(error.message).includes("not found")
    ) {
      return notFound();
    } else {
      throw error;
    }
  }
  return <BlogDetailPage blogData={blogData} />;
}

export default Page;

import BlogDetailPage from "@/components/features/blog/BlogDetailPage";
import { generateDynamicSeo } from "@/helpers/generateDynamicSeo";
import { getBlogDetail } from "@/services/blogs/blogApis";

interface PageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: PageProps) {
  const blogData = await getBlogDetail(params.slug);

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
    url: `https://esimcard.com/${params.slug}/`,
    image: image_url || "https://esimcard.com/images/logo-1x1-new.png",
    publishedTime: created_at || updated_at || new Date().toISOString(),
    modifiedTime: created_at || updated_at || new Date().toISOString(),
  });
}

async function Page({ params }: { params: { slug: string } }) {
  const blogData = await getBlogDetail(params.slug);
  return <BlogDetailPage blogData={blogData} />;
}

export default Page;

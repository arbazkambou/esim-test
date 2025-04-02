import BlogCategoriesPage from "@/components/features/blog/BlogCategoriesPage";
import BlogDetailPage from "@/components/features/blog/BlogDetailPage";
import { generateDynamicSeo } from "@/helpers/generateDynamicSeo";
import {
  getBlogDetail,
  getBlogs,
  getBlogsCategories,
} from "@/services/blogs/blogApis";

export interface BlogsSearchParams {
  category_slug?: string;
  search?: string;
  page?: number;
}

interface PageProps {
  params: { category: string };
}

export async function generateMetadata({ params }: PageProps) {
  const blogData = await getBlogs({ category_slug: params.category });

  const { meta_title, meta_description } = blogData;

  return generateDynamicSeo({
    meta_title,
    meta_description,
    meta_keywords: null,
    url: `https://esimcard.com/blog/${params.category}/`,
    image: "https://esimcard.com/images/logo-1x1-new.png",
    publishedTime: null,
    modifiedTime: null,
  });
}

async function Page({
  params,
  searchParams,
}: {
  params: { category: string };
  searchParams: BlogsSearchParams;
}) {
  const categories = await getBlogsCategories();

  if (!categories.find((category) => category.slug === params.category)) {
    const blogData = await getBlogDetail(params.category);

    return <BlogDetailPage blogData={blogData} />;
  }
  return (
    <>
      <BlogCategoriesPage
        params={params}
        searchParams={searchParams}
        categories={categories}
      />
    </>
  );
}

export default Page;

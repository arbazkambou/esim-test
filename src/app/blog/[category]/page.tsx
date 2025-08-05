import BlogCategoriesPage from "@/components/features/blog/BlogCategoriesPage";
import BlogDetailPage from "@/components/features/blog/BlogDetailPage";
import { cleanString } from "@/helpers/cleanString";
import { generateDynamicSeo } from "@/helpers/generateDynamicSeo";
import {
  getBlogDetail,
  getBlogs,
  getBlogsCategories,
} from "@/services/blogs/blogApis";
import { notFound } from "next/navigation";

export interface BlogsSearchParams {
  category_slug?: string;
  search?: string;
  page?: number;
}

interface PageProps {
  params: { category: string };
}

export async function generateMetadata({ params }: PageProps) {
  const categories = await getBlogsCategories();

  //IF it is a blog slug then page should have a blog spepcifc seo
  if (!categories.find((category) => category.slug === params.category)) {
    let blogData;
    try {
      blogData = await getBlogDetail({ slug: params.category });
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
      url: `https://esimcard.com/blog/${params.category}/`,
      image: image_url || "https://esimcard.com/images/logo-1x1-new.png",
      publishedTime: created_at || updated_at || new Date().toISOString(),
      modifiedTime: created_at || updated_at || new Date().toISOString(),
    });
  }

  //it it is not a blog slug then it should render a normal blogs seo
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

  //If slug is belong to a blog then it should render a blog detail page else it should render a normal blogs page
  if (!categories.find((category) => category.slug === params.category)) {
    let blogData;
    try {
      blogData = await getBlogDetail({ slug: params.category });
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

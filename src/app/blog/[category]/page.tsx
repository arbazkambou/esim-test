import BlogCategoriesPage from "@/components/features/blog/BlogCategoriesPage";
import BlogDetailPage from "@/components/features/blog/BlogDetailPage";
import { getBlogDetail, getBlogsCategories } from "@/services/blogs/blogApis";

export interface BlogsSearchParams {
  category_slug?: string;
  search?: string;
  page?: number;
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

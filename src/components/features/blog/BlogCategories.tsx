import BlogTabs from "@/components/features/blog/BlogCategoriesTabs";
import { Category } from "@/types/blogs/Blogs";

async function BlogCategories({
  slug,
  categories,
}: {
  slug?: string;
  categories: Category[];
}) {
  return <BlogTabs categories={categories} activeSlug={slug} />;
}

export default BlogCategories;

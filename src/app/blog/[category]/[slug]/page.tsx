import BlogDetailPage from "@/components/features/blog/BlogDetailPage";
import { getBlogDetail } from "@/services/blogs/blogApis";

async function Page({ params }: { params: { slug: string } }) {
  const blogData = await getBlogDetail(params.slug);
  return <BlogDetailPage blogData={blogData} />;
}

export default Page;

import { BlogsSearchParams } from "@/app/blog/page";
import BlogCard from "@/components/features/blog/BlogCard";
import { BlogPagination } from "@/components/features/blog/BlogPagination";
import { getBlogs } from "@/services/blogs/blogApis";

interface PropsType {
  searchParams: BlogsSearchParams;
  params?: { category: string };
}

async function Blogs({ searchParams, params }: PropsType) {
  if (params?.category) {
    searchParams.category_slug = params.category;
  }
  const response = await getBlogs(searchParams);

  return (
    <>
      <section className="container mt-16 grid gap-x-[6.5rem] gap-y-[5rem] xl:grid-cols-2">
        {response.blogs.length > 0 ? (
          response.blogs.map((item, index) => (
            <BlogCard blog={item} key={index} />
          ))
        ) : (
          <p className="col-span-2 flex items-center justify-center rounded-md bg-muted p-5 font-semibold text-foreground-light">
            No Blog Found 🙂
          </p>
        )}
      </section>
      <section className="container mt-16">
        <BlogPagination blogMeta={response.meta} slug={params?.category} />
      </section>
    </>
  );
}
export default Blogs;

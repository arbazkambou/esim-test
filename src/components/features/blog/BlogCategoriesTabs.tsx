import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getBlogsCategories } from "@/services/blogs/blogApis";
import { Category } from "@/types/blogs/Blogs";
import Link from "next/link";

async function BlogCategoriesTabs({
  categories,
  activeSlug,
}: {
  categories?: Category[];
  activeSlug?: string;
}) {
  let blogCategories;

  if (categories) {
    blogCategories = categories;
  } else {
    blogCategories = await getBlogsCategories();
  }

  return (
    <Tabs defaultValue="all" className="mt-16 max-w-full overflow-auto">
      <div className="flex md:justify-center">
        <TabsList className="flex items-center gap-2">
          <Link href={`/blog/`} scroll={false}>
            <TabsTrigger
              value={`/`}
              className={` ${activeSlug ? "" : "bg-primary font-500 text-background"}`}
            >
              All Blogs
            </TabsTrigger>
          </Link>
          {blogCategories.map((item, index) => (
            <Link href={`/blog/${item.slug}`} key={index} scroll={false}>
              <TabsTrigger
                value={item.slug}
                className={`w-full ${item.slug === activeSlug && "bg-primary font-500 text-background"}`}
              >
                {item.name}
              </TabsTrigger>
            </Link>
          ))}
        </TabsList>
      </div>
    </Tabs>
  );
}

export default BlogCategoriesTabs;

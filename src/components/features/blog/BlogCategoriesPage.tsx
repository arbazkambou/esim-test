import stars from "@/_assets/svgs/5Star.svg";
import blogHero from "@/_assets/svgs/blogHero.svg";
import { BlogsSearchParams } from "@/app/blog/page";
import { BlogCardSkeleton } from "@/components/features/blog/BlogCardSkelton";
import BlogSearch from "@/components/features/blog/BlogSearch";
import { Category } from "@/types/blogs/Blogs";
import Image from "next/image";
import { Suspense } from "react";
import BlogTabs from "./BlogCategoriesTabs";
import Blogs from "./Blogs";

function BlogCategoriesPage({
  params,
  searchParams,
  categories,
}: {
  params: { category: string };
  searchParams: BlogsSearchParams;
  categories: Category[];
}) {
  return (
    <>
      {/* hero section and search blogs  */}
      <section className="container mt-16 grid bg-primary px-[1rem] py-[1.94rem] text-background sm:px-[3.12rem] xl:grid-cols-5 xl:rounded-[2.5rem]">
        <div className="col-span-5 xl:col-span-3">
          <div className="flex h-full flex-col justify-center gap-[1.5rem]">
            {/* <p className="flex items-center justify-center gap-4 text-xs text-background xl:justify-start">
              <span className="font-700">Excellent</span>
              <span>
                <span className="font-700">4.8</span> out of 5
              </span>
              <span className="flex items-center gap-1 font-700">
                <Image
                  src={whiteStar}
                  alt="Trustpilot Rating"
                  height={14}
                  width={13}
                  sizes="auto"
                />
                Trustpilot
              </span>
            </p> */}
            <div className="flex items-center justify-center gap-4 xl:justify-start">
              <div className="relative h-[21.5px] w-[120px]">
                <Image src={stars} alt="5 stars rating" fill sizes="auto" />
              </div>
              <p className="text-body-sm font-700 text-background">
                500,000+ Downloads
              </p>
            </div>
            <h1 className="text-center font-montserrat text-h1-base font-600 tracking-wide md:text-h1-md xl:text-start xl:text-h1-xl">
              eSIMCard Blogs
            </h1>
            <p className="text-sm text-background/90 xl:text-[1.25rem]">
              Reach out to the world’s most reliable eSim services.
            </p>

            <BlogSearch />
          </div>
        </div>
        <div className="col-span-2 hidden xl:block">
          <div className="relative h-[286px] w-[305px] place-self-center">
            <Image src={blogHero} alt="eSIM Card Blogs" fill sizes="auto" />
          </div>
        </div>
      </section>
      {/* categories tabs  */}
      <BlogTabs categories={categories} activeSlug={params.category} />
      <Suspense
        key={searchParams.search}
        fallback={
          <section className="container mt-16 grid gap-x-[6.5rem] gap-y-[5rem] xl:grid-cols-2">
            {Array.from({ length: 10 }).map((_, index) => (
              <BlogCardSkeleton key={index} />
            ))}
          </section>
        }
      >
        <Blogs searchParams={searchParams} params={params} />
      </Suspense>
    </>
  );
}

export default BlogCategoriesPage;

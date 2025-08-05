import stars from "@/_assets/svgs/5Star.svg";
import blogHero from "@/_assets/svgs/blogHero.svg";
import { BlogCardSkeleton } from "@/components/features/blog/BlogCardSkelton";
import BlogTabs from "@/components/features/blog/BlogCategoriesTabs";
import BlogSearch from "@/components/features/blog/BlogSearch";
import { seoData } from "@/lib/seoConfig";
import { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";
import { PageParams } from "../page";
import Blogs from "@/components/features/blog/Blogs";

export interface BlogsSearchParams {
  category_slug?: string;
  search?: string;
  page?: number;
}

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const localizedSeo = seoData[params.locale] || seoData["en"];
  return localizedSeo.blog;
}

async function Page({ searchParams }: { searchParams: BlogsSearchParams }) {
  return (
    <>
      {/* hero section and search blogs  */}
      <section className="container mt-16 grid bg-primary px-[1rem] py-[1.94rem] text-background sm:px-[3.12rem] xl:grid-cols-5 xl:rounded-[2.5rem]">
        <div className="col-span-5 xl:col-span-3">
          <div className="flex h-full flex-col justify-center gap-[1.5rem]">
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
      <BlogTabs />

      {/* Showing fallback/ skeltons if user search for a specific blog  */}
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
        <Blogs searchParams={searchParams} />
      </Suspense>
    </>
  );
}

export default Page;

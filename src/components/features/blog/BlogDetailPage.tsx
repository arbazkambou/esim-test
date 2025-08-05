"use client";

import placeHolderImage from "@/_assets/images/placeholderImage.svg";
import placeholderUser from "@/_assets/images/placeholderUser.jpg";
import ShareableButton from "@/components/my-ui/links/ShareableButton";
import { Card } from "@/components/ui/card";
import { formatDate } from "@/helpers/formatDate";
import { BlogDetailData } from "@/types/blogs/BlogDetail";
import { ArrowUpRight, CalendarClock, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import BlogCard from "./BlogCard";
import styles from "./BlogDetail.module.css";
import ShowPromotionalBanner from "@/components/my-ui/shared/ShowPromotionalBanner";
import { addLazyToIframes } from "@/helpers/addlazyToIframe";

interface PageProps {
  blogData: BlogDetailData;
}

function BlogDetailPage({ blogData }: PageProps) {
  const {
    blog: {
      image,
      name,
      category,
      content,
      slug,
      created_at,
      author_image,
      author_name,
      destination_1,
      destination_2,
    },
    related_blogs,
    scriptData,
  } = blogData;

  const isDestinationPlans = destination_1 && destination_2;

  const htmlString = `
<section class="grid gap-x-[3rem] gap-y-[1.5rem] rounded-[0.70494rem] border px-[1.59rem] py-[2rem] xl:grid-cols-3 xl:gap-y-[2rem]">
  <div class="col-span-3 flex flex-col items-center justify-between gap-3 xl:col-span-1 xl:items-start">
    <div class="flex items-center gap-2">
      <p class="text-[1.17488rem] font-600 text-foreground/80">4.9</p>
      <img width="128" height="21" alt="4.9 rating" src="/images/rating-star.svg" />
    </div>
    <p class="w-max rounded-[0.3995rem] bg-primary/10 px-[0.65rem] py-[0.41rem] text-[0.93225rem] font-500 text-primary">Highly Rated</p>
    <p class="text-center text-body-base -tracking-[0.02656rem] text-foreground/80 xl:text-start">Based on 500,000+ customer reviews</p>
  </div>
  <div class="col-span-3 flex flex-col items-center justify-between gap-3 xl:col-span-1 xl:items-start">
    <img src="/images/users.png" height="18" width="130" alt="rated people" />
    <p class="w-max rounded-[0.3995rem] bg-primary/10 px-[0.65rem] py-[0.41rem] text-[0.93225rem] font-500 text-primary">Trusted worldwide</p>
    <p class="text-center text-body-base -tracking-[0.02656rem] text-foreground/80 xl:text-start">Over 1 million travelers across the globe have trusted us</p>
  </div>
  <div class="col-span-3 flex flex-col items-center justify-between gap-3 xl:col-span-1 xl:items-start">
    <img src="/images/globe.svg" height="35" width="35" alt="travel friendly" />
    <p class="w-max rounded-[0.3995rem] bg-primary/10 px-[0.65rem] py-[0.41rem] text-[0.93225rem] font-500 text-primary">Travel Friendly</p>
    <p class="text-center text-body-base -tracking-[0.02656rem] text-foreground/80 xl:text-start">No swaps, global connectivity ensured</p>
  </div>
  <div class="col-span-3 flex flex-col items-center justify-center gap-3 xl:flex-row xl:justify-between">
    <p class="text-center text-[0.9225rem] text-foreground/80 xl:text-start xl:text-body-lg">
      With <span class="font-semibold">eSIM Card</span>, you can save <span class="font-semibold">100%</span> on roaming fees
    </p>
    <button class="shrink-0 rounded-pill bg-primary px-[1rem] py-[0.8rem] text-sm text-background">Buy eSIM</button>
  </div>
</section>
`;

  return (
    <>
      {scriptData && (
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(scriptData),
          }}
          type="application/ld+json"
        />
      )}

      <section className="container relative mx-auto mt-10 hidden h-[428px] max-w-[1127px] xl:block">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            sizes="auto"
            quality={70}
            className="rounded-[2.5rem] object-cover"
          />
        ) : (
          <Image
            src={placeHolderImage}
            alt={name}
            className="rouded-[2.5rem]"
          />
        )}
      </section>

      <Card className="container mx-auto mt-16 flex max-w-[1000px] flex-col gap-10 rounded-[0.9375] border-none px-[1.81rem] py-[2rem] !font-poppins leading-[1.5rem] !text-muted-foreground !shadow-custom">
        {/* Breadcrumb  and share button*/}
        <div className="flex items-center justify-between">
          <div className="flex w-max items-center justify-start gap-2 rounded-[0.3125rem] bg-muted px-[1rem] py-[0.62rem] xl:gap-[1.31rem]">
            <Link
              href={`/blog/`}
              className="text-[0.875rem] font-500 text-foreground-light/85 transition-all hover:text-primary"
            >
              Blog
            </Link>
            <ChevronRight className="text-primary" size={20} />
            <Link
              href={category ? `/blog/${category.slug}` : "/blog"}
              className="text-[0.875rem] font-500 text-foreground-light/85 transition-all hover:text-primary"
            >
              {category?.name}
            </Link>
          </div>
          <ShareableButton
            url={category ? `/blog/${category.slug}/${slug}` : `/blog/${slug}`}
          >
            Share
          </ShareableButton>
        </div>

        {/* author and date time  */}
        <Card className="rounded-[0.625rem] px-[0.69rem] py-[0.75rem] shadow-sm xl:px-[1rem]">
          <div className="flex items-center justify-between">
            {/* author  */}
            <div className="blogs-center flex items-center gap-[10px]">
              {author_image ? (
                <div className="relative h-[26px] w-[26px] md:h-[43px] md:w-[43px]">
                  <Image
                    src={author_image}
                    fill
                    sizes="auto"
                    alt={`${author_name}'s blog`}
                    className="rounded-full"
                  />
                </div>
              ) : (
                <div className="relative h-[26px] w-[26px] md:h-[43px] md:w-[43px]">
                  <Image
                    src={placeholderUser}
                    fill
                    sizes="auto"
                    alt={`${author_name}'s blog`}
                    className="rounded-full"
                  />
                </div>
              )}

              <p className="text-[14px] font-600 md:text-[1.375rem]">
                {author_name}
              </p>
            </div>

            {/* date time  */}
            <div className="blogs-center flex items-center gap-2">
              <CalendarClock className="h-[15px] w-[15px] xl:h-[20px] xl:w-[25px]" />
              <p className="font-montserrat text-xs xl:text-sm">
                {formatDate(created_at)}
              </p>
            </div>
          </div>
        </Card>

        {/* blog detail */}
        <section
          dangerouslySetInnerHTML={{ __html: addLazyToIframes(content) }}
          className={`${styles.blogDetail}`}
        ></section>

        <section
          dangerouslySetInnerHTML={{ __html: htmlString }}
          className={`${styles.blogDetail} sr-only`}
        ></section>
      </Card>

      {/* related plan card  */}
      {isDestinationPlans && (
        <Card className="container mx-auto mt-16 max-w-[1000px] rounded-[0.9375] border-none px-[1.81rem] py-[2rem] !shadow-custom">
          <h2 className="font-poppins text-h2-base font-500 md:text-h2-md">
            eSIM plans that may interest you
          </h2>
          <div className="mt-10 grid gap-x-[5rem] gap-y-[4rem] xl:grid-cols-2">
            {destination_1 && (
              <Link
                className="group flex justify-between rounded-lg border border-transparent bg-muted px-[1.06rem] py-[0.94rem] transition-all hover:scale-105 hover:border-primary hover:bg-background hover:shadow-2xl"
                href={destination_1.url}
              >
                <div className="flex items-center gap-3">
                  <div className="relative h-[42px] w-[42px]">
                    <Image
                      src={destination_1.image_url}
                      alt={`${destination_1.name} flag`}
                      sizes="auto"
                      fill
                      className="shrink-0 rounded-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-body-base font-500">
                      {destination_1.name}
                    </p>
                    <p className="text-sm">
                      Starts at ${destination_1.starts_at}
                    </p>
                  </div>
                </div>
                <div>
                  <ArrowUpRight className="group-hover:rotate-45 group-hover:text-primary" />
                </div>
              </Link>
            )}
            {destination_1 && (
              <Link
                className="group flex justify-between rounded-lg border border-transparent bg-muted px-[1.06rem] py-[0.94rem] transition-all hover:scale-105 hover:border-primary hover:bg-background hover:shadow-2xl"
                href={destination_2.url}
              >
                <div className="flex items-center gap-3">
                  <div className="relative h-[42px] w-[42px]">
                    <Image
                      src={destination_2.image_url}
                      alt={`${destination_2.name} flag`}
                      sizes="auto"
                      fill
                      className="shrink-0 rounded-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-body-base font-500">
                      {destination_2.name}
                    </p>
                    <p className="text-sm">
                      Starts at ${destination_2.starts_at}
                    </p>
                  </div>
                </div>
                <div>
                  <ArrowUpRight className="group-hover:rotate-45 group-hover:text-primary" />
                </div>
              </Link>
            )}
          </div>
        </Card>
      )}

      {/* Related blogs  */}
      <section className="container mt-16">
        <h2 className="text-center font-poppins text-h2-base font-500 md:text-h2-md xl:text-h2-xl">
          Related Blogs
        </h2>
        <div className="mt-16 grid gap-x-[5rem] gap-y-[4rem] xl:grid-cols-2">
          {related_blogs.slice(0, 2).map((blog, index) => (
            <BlogCard blog={blog} key={index} isRelatedBlog />
          ))}
        </div>
      </section>

      <ShowPromotionalBanner />
    </>
  );
}

export default BlogDetailPage;

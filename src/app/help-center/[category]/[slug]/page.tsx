import placeholderUser from "@/_assets/images/placeholderUser.jpg";
import ShareableButton from "@/components/my-ui/links/ShareableButton";
import { Card } from "@/components/ui/card";
import { formatDate } from "@/helpers/formatDate";
import { generateDynamicSeo } from "@/helpers/generateDynamicSeo";
import { getHelpCenterQuestionDetail } from "@/services/support/HelpCenterApis";
import { BookText, CalendarClock, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import ShowPromotionalBanner from "@/components/my-ui/shared/ShowPromotionalBanner";
import { cleanString } from "@/helpers/cleanString";
import { notFound } from "next/navigation";
interface PageProps {
  params: { slug: string; category: string };
}

export async function generateMetadata({ params }: PageProps) {
  let questionData;

  try {
    questionData = await getHelpCenterQuestionDetail(
      params.category,
      params.slug,
    );
  } catch (error) {
    if (
      error instanceof Error &&
      cleanString(error.message).includes("not found")
    ) {
      throw notFound();
    } else {
      throw error;
    }
  }
  const {
    name: meta_title,
    sub_content: meta_description,
    keywords: meta_keywords,
    created_at,
    updated_at,
  } = questionData.data.helpCenter;

  return generateDynamicSeo({
    meta_title,
    meta_description,
    meta_keywords,
    url: `https://esimcard.com/help-center/${params.category}/${params.slug}/`,
    image: "https://esimcard.com/images/logo-1x1-new.png",
    publishedTime: created_at || updated_at || new Date().toISOString(),
    modifiedTime: created_at || updated_at || new Date().toISOString(),
  });
}

async function Page({
  params,
}: {
  params: { slug: string; category: string };
}) {
  const { category, slug } = params;

  const response = await getHelpCenterQuestionDetail(category, slug);

  const {
    data: {
      helpCenter: {
        category: questionCategory,
        author_image,
        author_name,
        content,

        slug: questionSlug,
        created_at,
      },
      related_questions,
    },
  } = response;

  return (
    <>
      <Card className="container mx-auto mt-16 flex max-w-[1000px] flex-col gap-10 rounded-[0.9375] border-none px-[1.81rem] py-[2rem] !font-poppins leading-[1.5rem] !text-muted-foreground !shadow-custom">
        {/* Breadcrumb  and share button*/}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex w-max items-center justify-start gap-2 rounded-[0.3125rem] bg-muted px-[1rem] py-[0.62rem] xl:gap-[1.31rem]">
            <Link
              href={`/help-center/`}
              className="text-[0.875rem] font-500 text-foreground-light/85 transition-all hover:text-primary"
            >
              Help Center
            </Link>
            <ChevronRight className="text-primary" size={20} />
            <Link
              href={
                questionCategory
                  ? `/help-center/${questionCategory.slug}/`
                  : "/help-center/"
              }
              className="text-[0.875rem] font-500 text-foreground-light/85 transition-all hover:text-primary"
            >
              {questionCategory.name}
            </Link>
          </div>
          <div>
            <ShareableButton
              url={`/help-center/${questionCategory.slug}/${questionSlug}`}
            >
              Share
            </ShareableButton>
          </div>
        </div>

        {/* author and date time  */}
        <Card className="rounded-[0.625rem] px-[0.69rem] py-[0.75rem] shadow-sm xl:px-[1rem]">
          <div className="flex items-center justify-between">
            {/* author  */}
            <div className="blogs-center flex items-center gap-[10px]">
              {author_image !== " " ? (
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
          dangerouslySetInnerHTML={{ __html: content }}
          className={`${styles.blogDetail}`}
        ></section>

        <Card className="rounded-md border-none px-[1rem] py-[2rem] shadow-myCard">
          <h2 className="font-montserrat text-h2-base font-600 text-foreground/80 md:text-h2-md">
            Related Articles
          </h2>

          <div className="barMini mt-6 flex max-h-[450px] flex-col overflow-auto">
            {related_questions.map((item, index) => (
              <Link
                className="i group flex cursor-pointer gap-2 border-b py-5 pe-6"
                key={index}
                href={`/help-center/${item.category.slug}/${item.slug}`}
              >
                <BookText
                  size={24}
                  className="mt-1 transition-all group-hover:text-primary"
                />
                <h3 className="text-base transition-all group-hover:text-primary">
                  {item.name}
                </h3>
              </Link>
            ))}
          </div>
        </Card>
      </Card>
      <ShowPromotionalBanner />
    </>
  );
}

export default Page;

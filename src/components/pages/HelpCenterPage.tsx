"use client";

import stars from "@/_assets/svgs/5Star.svg";
import whiteStar from "@/_assets/svgs/whiteStar.svg";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cleanString } from "@/helpers/cleanString";
import { formatDateTime } from "@/helpers/formatDateTime";
import { HelpCenterCategories } from "@/types/support/HelpCenterTypes";
import {
  ArrowUpRight,
  BookText,
  Search,
  Settings,
  UserCog,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function HelpCenterPage({
  data,
  isCategory,
}: {
  data: HelpCenterCategories;
  isCategory?: boolean;
}) {
  const [searchQuery, setSearchQuery] = useState("");

  const { categories, help_center_questions, recent_help_center_question } =
    data.data;

  let filteredQuesntions;

  if (searchQuery) {
    filteredQuesntions = help_center_questions.filter((item) =>
      cleanString(item.name).includes(searchQuery),
    );
  } else {
    filteredQuesntions = help_center_questions;
  }

  let filteredRecentQuesntions;

  if (searchQuery) {
    filteredRecentQuesntions = recent_help_center_question.filter((item) =>
      cleanString(item.name).includes(searchQuery),
    );
  } else {
    filteredRecentQuesntions = recent_help_center_question;
  }

  let heading = "";

  if (isCategory) {
    heading = help_center_questions[0].category.name;
  } else {
    heading = "Help Center";
  }

  return (
    <>
      <section className="mb-16 mt-16 xl:container">
        <div className="flex flex-col items-center gap-[1.6rem] bg-primary px-[1rem] py-[1.94rem] text-background sm:px-[3.12rem] xl:col-span-1 xl:rounded-[2.5rem]">
          <p className="flex items-center justify-center gap-4 text-xs text-background xl:justify-start">
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
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="relative h-[21.5px] w-[120px]">
              <Image src={stars} alt="5 stars rating" fill sizes="auto" />
            </div>
            <p className="text-[0.89rem] font-700 text-background">
              50000+ Downloads
            </p>
          </div>
          <h1 className="text-center font-montserrat text-h1-base font-600 leading-normal text-background md:text-h1-md xl:text-start xl:text-h1-xl">
            {heading}
          </h1>

          <div className="relative w-full sm:w-[478px]">
            <Input
              placeholder="Type a topic, question or issue here"
              className="w-full rounded-[1.4375rem] bg-background text-muted-foreground shadow focus-within:shadow-xl"
              onChange={(e) => {
                setSearchQuery(cleanString(e.target.value));
              }}
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 transform cursor-pointer text-primary" />
          </div>
        </div>
      </section>

      {/* ctaegories links */}

      {!isCategory && (
        <section className="container mt-16 grid gap-x-[2.4375rem] gap-y-[1.5rem] xl:grid-cols-2 xl:gap-x-[7rem]">
          {categories.map((item, index) => (
            <Link key={index} href={`/help-center/${item.slug}`}>
              <Card
                className={`group flex cursor-pointer items-center gap-[2.44rem] ${index === 0 ? "xl:place-self-end" : "xl:place-self-start"} rounded-sm border-2 border-transparent px-[1rem] py-[0.66rem] shadow-myCard transition-all hover:scale-[105%] hover:border-primary`}
                key={index}
              >
                <div className="w-max shrink-0 rounded-full bg-primary/10 p-[1.22rem] text-primary">
                  {item.name === "Troubleshooting" ? (
                    <Settings size={33} />
                  ) : (
                    <UserCog size={33} />
                  )}
                </div>
                <h2 className="flex items-center gap-2 font-montserrat text-body-md font-600 text-foreground/85 transition-all group-hover:text-primary md:text-body-lg xl:text-[1.5rem]">
                  {item.name}
                  <span>
                    <ArrowUpRight
                      size={20}
                      className="transition-all group-hover:rotate-45 group-hover:text-primary"
                    />
                  </span>
                </h2>
              </Card>
            </Link>
          ))}
        </section>
      )}

      {/* recent and promoted articles  */}
      <section className="container mt-16 grid gap-[2rem] xl:grid-cols-2 xl:gap-[3rem]">
        <Card className="rounded-md border-none px-[1rem] py-[2rem] shadow-myCard">
          <h2 className="font-montserrat text-h2-base font-600 text-foreground/80 md:text-h2-md">
            Promoted Articles
          </h2>

          <div className="barMini mt-6 flex max-h-[450px] flex-col overflow-auto">
            {filteredQuesntions.map((item, index) => (
              <Link
                className="i group flex cursor-pointer gap-2 border-b py-5 pe-6"
                key={index}
                href={`/help-center/${item.category.slug}/${item.slug}`}
              >
                <BookText className="mt-1 h-[20px] w-[20px] shrink-0 transition-all group-hover:text-primary sm:h-[24px] sm:w-[24px]" />
                <h3 className="text-base transition-all group-hover:text-primary">
                  {item.name}
                </h3>
              </Link>
            ))}
          </div>
        </Card>
        <Card className="rounded-md border-none px-[1rem] py-[2rem] shadow-myCard">
          <h2 className="font-montserrat text-h2-base font-600 text-foreground/80 md:text-h2-md">
            Recent Activity
          </h2>

          <div className="barMini mt-6 flex max-h-[450px] flex-col overflow-auto">
            {filteredRecentQuesntions.map((item, index) => (
              <Link
                className="group flex cursor-pointer gap-2 border-b py-5 pe-6"
                key={index}
                href={`/help-center/${item.category.slug}/${item.slug}`}
              >
                <BookText className="mt-1 h-[20px] w-[20px] shrink-0 transition-all group-hover:text-primary sm:h-[24px] sm:w-[24px]" />
                <div>
                  <h3 className="text-base transition-all group-hover:text-primary">
                    {item.name}
                  </h3>
                  <p className="text-sm text-muted-foreground transition-all group-hover:text-primary">
                    {formatDateTime(item.created_at)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </Card>
      </section>
    </>
  );
}

export default HelpCenterPage;

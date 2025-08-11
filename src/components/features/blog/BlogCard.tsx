import placeholderImage from "@/_assets/images/placeholderImage.svg";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { formatDate } from "@/helpers/formatDate";
import { Blog } from "@/types/blogs/Blogs";
import { ArrowUpRight, CalendarClock, PencilLine } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type PropsType = {
  blog: Blog;
  isRelatedBlog?: boolean;
};

function BlogCard({ blog, isRelatedBlog }: PropsType) {
  return (
    <Card className="flex flex-col justify-between gap-[1rem] border border-gray-300 shadow-sm hover:cursor-pointer">
      {/* blog img  */}
      {blog.image ? (
        <Link
          className="group relative flex h-[240px] w-full items-center justify-center"
          href={`/blog${blog.category ? `/${blog.category.slug}` : ""}/${blog.slug}`}
        >
          <Image
            src={blog.image}
            alt={"eSim Blog"}
            sizes="auto"
            fill
            quality={70}
            className="rounded-[0.375rem] transition-all group-hover:blur-[2px]"
          />
          <Badge className="z-50 flex scale-0 items-center gap-2 p-3 opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100">
            <ArrowUpRight size={30} />
          </Badge>
        </Link>
      ) : (
        <Link
          className="group relative flex h-[240px] w-full items-center justify-center"
          href={`/blog/${blog.category ? blog.category.slug : "blog"}/${blog.slug}`}
        >
          <Image
            src={placeholderImage}
            alt={"eSim Blog"}
            sizes="auto"
            fill
            quality={70}
            className="rounded-[0.375rem] object-cover transition-all group-hover:blur-[3px]"
          />
          <Badge className="z-50 flex items-center gap-2 p-3 opacity-0 transition-all group-hover:opacity-100">
            <ArrowUpRight size={30} />
          </Badge>
        </Link>
      )}

      <div className="flex flex-col justify-end gap-[1rem] p-4">
        <div className="blogs-center flex justify-between">
          {/* blog category badge  */}
          <Link href={`/blog/${blog.category ? blog.category.slug : ""}`}>
            <Badge className="w-max shrink-0 bg-primary/10 px-2 text-sm font-500 text-primary hover:bg-primary hover:text-background">
              {blog.category ? blog.category.name : "Blog"}
            </Badge>
          </Link>

          {/* blog date and read time  */}
          <div className="blogs-center flex gap-4">
            <div className="blogs-center flex gap-2">
              <CalendarClock className="h-[15px] w-[15px]" />
              <p className="font-montserrat text-xs">
                {formatDate(blog.created_at)}
              </p>
            </div>
            {/* <div className="blogs-center flex gap-2">
              <BookOpen className="h-[15px] w-[15px]" />
              <p className="font-montserrat text-xs">21 min read</p>
            </div> */}
          </div>
        </div>

        {/* blog title  */}
        <Link
          href={`/blog${blog.category ? `/${blog.category.slug}` : ""}/${blog.slug}`}
          className="group flex justify-between gap-[0.5rem] font-montserrat transition-all hover:text-primary"
        >
          {isRelatedBlog ? (
            <p className="text-[1.125rem] font-600 md:text-[1.375rem] xl:text-[1.5rem]">
              {blog.name}
            </p>
          ) : (
            <h2 className="text-[1.125rem] font-600 md:text-[1.375rem] xl:text-[1.5rem]">
              {blog.name}
            </h2>
          )}

          <ArrowUpRight className="w-[24px mt-1 h-[24px] shrink-0 transition-all group-hover:rotate-45" />
        </Link>

        {/* blog description  */}
        {!isRelatedBlog && (
          <Link
            href={`/blog${blog.category ? `/${blog.category.slug}` : ""}/${blog.slug}`}
          >
            <p className="cursor-pointer text-base leading-[1.5rem] text-muted-foreground transition-all hover:text-primary">
              {blog.sub_content}
            </p>
          </Link>
        )}

        {/* blog author  */}
        <div className="blogs-center flex items-center gap-[10px]">
          <div className="relative h-[40px] w-[40px]">
            <Image
              src={blog.author_image}
              fill
              sizes="auto"
              alt={`${blog.author_name}'s blog`}
              className="rounded-full"
            />
          </div>
          <PencilLine className="h-[14px] w-[14px]" />
          <p className="text-[18px] font-500">{blog.author_name}</p>
        </div>
      </div>
    </Card>
  );
}

export default BlogCard;

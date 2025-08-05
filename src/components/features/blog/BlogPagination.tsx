"use client";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from "@/components/ui/pagination";
import { BlogMeta } from "@/types/blogs/Blogs";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export function BlogPagination({
  blogMeta,
  slug,
}: {
  blogMeta: BlogMeta;
  slug?: string;
}) {
  const { currentPage, lastPage } = blogMeta;
  const searchParams = useSearchParams();
  const router = useRouter();
  const [page, setPage] = useState(searchParams.get("page") || "1");

  useEffect(
    function () {
      const handlePagination = () => {
        const params = new URLSearchParams(window.location.search);

        if (page.trim()) {
          if (page === "1") return;
          params.set("page", page.trim());
        } else {
          params.delete("page");
        }
        router.push(`?${params.toString()}`);
      };

      handlePagination();
    },
    [page, router],
  );

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <Button
            onClick={() => setPage(String(blogMeta.currentPage - 1))}
            disabled={currentPage === 1}
            variant={"ghost"}
            size={"sm"}
          >
            <ArrowLeft size={15} /> Previous
          </Button>
        </PaginationItem>
        {currentPage == 2 && (
          <PaginationItem>
            <Button
              variant={"ghost"}
              size={"sm"}
              onClick={() => {
                router.push(`/blog/${slug ? slug : ""}`);
                setPage("1");
              }}
            >
              {currentPage - 1}
            </Button>
          </PaginationItem>
        )}
        {currentPage > 2 && (
          <PaginationItem>
            <Button
              onClick={() => setPage(String(currentPage - 1))}
              variant={"ghost"}
              size={"sm"}
            >
              {currentPage - 1}
            </Button>
          </PaginationItem>
        )}

        <PaginationItem>
          <Button variant={"outline"}>{currentPage}</Button>
        </PaginationItem>
        {currentPage < lastPage && (
          <PaginationItem>
            <Button
              variant={"ghost"}
              size={"sm"}
              onClick={() => setPage(String(currentPage + 1))}
            >
              {currentPage + 1}
            </Button>
          </PaginationItem>
        )}

        {currentPage + 2 < lastPage && (
          <PaginationItem className="hidden md:block">
            <Button
              variant={"ghost"}
              size={"sm"}
              onClick={() => setPage(String(currentPage + 2))}
            >
              {currentPage + 2}
            </Button>
          </PaginationItem>
        )}
        {currentPage !== lastPage && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {currentPage !== lastPage && (
          <PaginationItem>
            <Button
              onClick={() => setPage(String(lastPage))}
              variant={"ghost"}
              size={"sm"}
            >
              {lastPage}
            </Button>
          </PaginationItem>
        )}

        <PaginationItem>
          <Button
            onClick={() => setPage(String(blogMeta.currentPage + 1))}
            disabled={currentPage === lastPage}
            variant={"ghost"}
            size={"sm"}
          >
            Next <ArrowRight size={15} />
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

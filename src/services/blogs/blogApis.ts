import { BlogCategories } from "@/types/blogs/BlogCategories";
import { BlogDetailResponse } from "@/types/blogs/BlogDetail";
import { Blogs } from "@/types/blogs/Blogs";

import { BlogsSearchParams } from "@/app/blog/page";
import { baseUrl } from "@/lib/fetch/apiSetup";
import {
  globalErrorHandler,
  globalHttpErrorHandler,
  globalResponseHandler,
} from "@/helpers/globalResponseHandler";

export async function getBlogs(searchParams: BlogsSearchParams) {
  try {
    const response = await fetch(`${baseUrl}/blogs?${searchParams}`, {
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(globalHttpErrorHandler(response));
    }

    const data: Blogs = await response.json();

    if (!data.status) {
      throw new Error(globalResponseHandler(response, response.status));
    }
    return data.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

export async function getBlogsCategories() {
  try {
    const response = await fetch(`${baseUrl}/blog-categories`, {
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 86400 },
    });

    if (!response.ok) {
      throw new Error(globalHttpErrorHandler(response));
    }

    const data: BlogCategories = await response.json();
    if (!data.status) {
      throw new Error(globalResponseHandler(response, response.status));
    }
    return data.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

export async function getBlogDetail({
  slug,
  categorySlug,
}: {
  slug: string;
  categorySlug?: string;
}) {
  const params = new URLSearchParams();
  if (categorySlug) {
    params.set("category_slug", categorySlug);
  }

  try {
    const response = await fetch(
      `${baseUrl}/blog/detail/${slug}?${params.toString()}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        next: {
          revalidate: 86400,
        },
      },
    );

    if (!response.ok) {
      throw new Error(globalHttpErrorHandler(response));
    }
    const data: BlogDetailResponse = await response.json();

    if (!data.status) {
      throw new Error(globalResponseHandler(response, response.status));
    }
    return data.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

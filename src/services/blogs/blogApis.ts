import { BlogsSearchParams } from "@/app/blog/page";
import {
  globalErrorHandler,
  globalResponseHanlder,
} from "@/helpers/globalResponseHandler";
import { BlogCategories } from "@/types/blogs/BlogCategories";
import { BlogDetailResponse } from "@/types/blogs/BlogDetail";
import { Blogs } from "@/types/blogs/Blogs";
import api from "../../lib/axios/apiSetup";

export async function getBlogs(searchParams: BlogsSearchParams) {
  try {
    const response = await api.get<Blogs>("/blogs", {
      params: { ...searchParams },
    });

    if (!response.data.status) {
      throw new Error(globalResponseHanlder(response));
    }
    return response.data.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

// export async function getBlogsCategories() {
//   try {
//     const response = await api.get<BlogCategories>("/blog-categories");

//     if (!response.data.status) {
//       throw new Error(globalResponseHanlder(response));
//     }
//     return response.data.data;
//   } catch (error) {
//     throw new Error(globalErrorHandler(error));
//   }
// }

export async function getBlogsCategories() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/blog-categories`,
      {
        next: { revalidate: 86400 },
      },
    );

    if (!res.ok) {
      throw new Error(await res.text());
    }

    const response: BlogCategories = await res.json();

    if (!response.status) {
      throw new Error("Not found");
    }

    return response.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

// export async function getBlogDetail(slug: string) {
//   try {
//     const response = await api.get<BlogDetailResponse>(`/blog/detail/${slug}`);

//     if (!response.data.status) {
//       throw new Error(globalResponseHanlder(response));
//     }
//     return response.data.data;
//   } catch (error) {
//     throw new Error(globalErrorHandler(error));
//   }
// }

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
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/blog/detail/${slug}?${params.toString()}`,
      {
        next: {
          revalidate: 86400,
        },
      },
    );

    if (!res.ok) {
      throw new Error(await res.text());
    }

    const response: BlogDetailResponse = await res.json();

    if (!response.status) {
      throw new Error(response.message);
    }

    return response.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

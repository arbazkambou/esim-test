import { BlogsSearchParams } from "@/app/blog/page";
import {
  globalErrorHandler,
  globalResponseHanlder,
} from "@/helpers/globalResponseHandler";
import { BlogCategories } from "@/types/blogs/BlogCategories";
import { BlogDetailResponse } from "@/types/blogs/BlogDetail";
import { Blogs } from "@/types/blogs/Blogs";
import api from "../axios/apiSetup";

export async function getBlogs(searchParams: BlogsSearchParams) {
  try {
    let response;
    if (searchParams.search && searchParams.page) {
      response = await api.get<Blogs>("/blogs", {
        params: { search: searchParams.search },
      });
    } else {
      response = await api.get<Blogs>("/blogs", {
        params: { ...searchParams },
      });
    }

    if (!response.data.status) {
      throw new Error(globalResponseHanlder(response));
    }
    return response.data.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

export async function getBlogsCategories() {
  try {
    const response = await api.get<BlogCategories>("/blog-categories");
    if (!response.data.status) {
      throw new Error(globalResponseHanlder(response));
    }
    return response.data.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

export async function getBlogDetail(slug: string) {
  try {
    const response = await api.get<BlogDetailResponse>(`/blog/detail/${slug}`);

    if (!response.data.status) {
      throw new Error(globalResponseHanlder(response));
    }
    return response.data.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

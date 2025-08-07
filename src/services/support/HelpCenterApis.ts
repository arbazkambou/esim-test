import {
  globalErrorHandler,
  globalHttpErrorHandler,
  globalResponseHandler,
} from "@/helpers/globalResponseHandler";
import { baseUrl } from "@/lib/fetch/apiSetup";
import {
  HelpCenterCategories,
  HelpCenterQuestionDetail,
} from "@/types/support/HelpCenterTypes";

export async function getHelpCenterQuestionsAndCategories(
  category?: string,
  slug?: string,
) {
  try {
    const params = new URLSearchParams();

    if (category) {
      params.append("category", category);
    }

    if (slug) {
      params.append("slug", slug);
    }

    const res = await fetch(
      `${baseUrl}/help-center-categories?${params.toString()}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        next: { revalidate: 86400 },
      },
    );

    if (!res.ok) {
      throw new Error(globalHttpErrorHandler(res));
    }

    const data: HelpCenterCategories = await res.json();

    if (!data.status) {
      throw new Error(globalResponseHandler(data, res.status));
    }

    return data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

export async function getHelpCenterQuestionDetail(
  category: string,
  slug: string,
) {
  try {
    const res = await fetch(`${baseUrl}/help-center/${category}/${slug}`, {
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 86400 },
    });

    if (!res.ok) {
      throw new Error(globalHttpErrorHandler(res));
    }

    const data: HelpCenterQuestionDetail = await res.json();

    if (!data.status) {
      throw new Error(globalResponseHandler(data, res.status));
    }

    return data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

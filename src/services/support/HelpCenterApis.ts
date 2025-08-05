import {
  globalErrorHandler,
  globalResponseHanlder,
} from "@/helpers/globalResponseHandler";
import {
  HelpCenterCategories,
  HelpCenterQuestionDetail,
} from "@/types/support/HelpCenterTypes";
import api from "../../lib/axios/apiSetup";

export async function getHelpCenterQuestionsAndCategories(
  category?: string,
  slug?: string,
) {
  try {
    const response = await api.get<HelpCenterCategories>(
      "/help-center-categories",
      { params: { category, slug } },
    );

    if (!response.data.status) {
      throw new Error(globalResponseHanlder(response));
    }

    return response.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

export async function getHelpCenterQuestionDetail(
  category: string,
  slug: string,
) {
  try {
    const response = await api.get<HelpCenterQuestionDetail>(
      `/help-center/${category}/${slug}`,
    );

    if (!response.data.status) {
      throw new Error(globalResponseHanlder(response));
    }

    return response.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

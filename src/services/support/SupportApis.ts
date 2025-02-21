import {
  globalErrorHandler,
  globalResponseHanlder,
} from "@/helpers/globalResponseHandler";
import {
  PostContactUsData,
  PostContactUsDataInputs,
} from "@/types/support/SupportTypes";
import liveApi from "../axios/apiSetupLive";

export async function postContactUsData(data: PostContactUsDataInputs) {
  try {
    const response = await liveApi.post<PostContactUsData>("/contact-us", {
      ...data,
    });
    if (!response.data.status) {
      throw new Error(globalResponseHanlder(response));
    }
    return response.data.message;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

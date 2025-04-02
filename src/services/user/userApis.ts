import { globalErrorHandler } from "@/helpers/globalResponseHandler";
import { GetUserObject } from "@/types/user/UserTypes";
import api from "../../lib/axios/apiSetup";

export async function getUser() {
  try {
    const response = await api.get<GetUserObject>("/user");

    if (!response.data) {
      throw new Error("Failed to get user");
    }
    return response.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

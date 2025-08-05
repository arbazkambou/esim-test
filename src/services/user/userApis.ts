import {
  globalErrorHandler,
  globalResponseHandler,
} from "@/helpers/globalResponseHandler";
import { baseUrl } from "@/lib/fetch/apiSetup";
import { GetUserObject } from "@/types/user/UserTypes";
import Cookies from "js-cookie";

export async function getUser() {
  try {
    const token = Cookies.get("token");
    const res = await fetch(`${baseUrl}/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    const data: GetUserObject = await res.json();

    if (!res.ok || !data.status) {
      throw new Error(globalResponseHandler(data, res.status));
    }

    return data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

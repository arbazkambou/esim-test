import {
  globalErrorHandler,
  globalResponseHandler,
} from "@/helpers/globalResponseHandler";
import { baseUrl } from "@/lib/fetch/apiSetup";
import {
  PostContactUsData,
  PostContactUsDataInputs,
} from "@/types/support/SupportTypes";

export async function postContactUsData(inputs: PostContactUsDataInputs) {
  try {
    const res = await fetch(`${baseUrl}/contact-us`, {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...inputs }),
    });

    const data: PostContactUsData = await res.json();

    if (!res.ok || !data.status) {
      throw new Error(globalResponseHandler(data, res.status));
    }

    return data.message;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

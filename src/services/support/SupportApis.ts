import {
  globalErrorHandler,
  globalHttpErrorHandler,
  globalResponseHandler,
} from "@/helpers/globalResponseHandler";
import { platformVersion } from "@/helpers/platform";
import { baseUrl } from "@/lib/fetch/apiSetup";
import {
  PostContactUsData,
  PostContactUsDataInputs,
} from "@/types/support/SupportTypes";

export async function postContactUsData(inputs: PostContactUsDataInputs) {
  try {
    const res = await fetch(`${baseUrl}/contact-us`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...inputs, ...platformVersion }),
    });

    if (!res.ok) {
      throw new Error(globalHttpErrorHandler(res));
    }

    const data: PostContactUsData = await res.json();

    if (!data.status) {
      throw new Error(globalResponseHandler(data, res.status));
    }

    return data.message;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

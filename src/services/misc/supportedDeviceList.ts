import {
  globalErrorHandler,
  globalHttpErrorHandler,
  globalResponseHandler,
} from "@/helpers/globalResponseHandler";
import { SupportedDeviceResponseType } from "@/types/misc/CheckCompatibilityTypes";

const url =
  "https://esimcard.com/api/get-supported-mobile-devices?key=esimcard-2001-101110-2030";

export async function getSupportedDeviceList() {
  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(globalHttpErrorHandler(response));
    }

    const data: SupportedDeviceResponseType = await response.json();

    if (!data.status) {
      throw new Error(globalResponseHandler(data, response.status));
    }

    return data.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

import {
  globalErrorHandler,
  globalResponseHanlder,
} from "@/helpers/globalResponseHandler";
import { SupportedDeviceResponseType } from "@/types/misc/CheckCompatibilityTypes";
import axios from "axios";

const url =
  "https://esimcard.com/api/get-supported-mobile-devices?key=esimcard-2001-101110-2030";

export async function getSupportedDeviceList() {
  try {
    const response = await axios.get<SupportedDeviceResponseType>(url);

    if (!response.data.status) {
      throw new Error(globalResponseHanlder(response));
    }

    return response.data.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

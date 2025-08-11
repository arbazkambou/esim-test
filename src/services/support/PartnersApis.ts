import {
  globalErrorHandler,
  globalHttpErrorHandler,
  globalResponseHandler,
} from "@/helpers/globalResponseHandler";
import { platformVersion } from "@/helpers/platform";
import { baseUrl } from "@/lib/fetch/apiSetup";
import {
  distributorPartnerInputs,
  DistributorPartnerResponse,
} from "@/types/support/PartnersTypes";

export async function postDistributorData(formData: distributorPartnerInputs) {
  try {
    const res = await fetch(`${baseUrl}/partner-distribution`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...formData, ...platformVersion }),
    });

    if (!res.ok) {
      throw new Error(globalHttpErrorHandler(res));
    }

    const data: DistributorPartnerResponse = await res.json();

    if (!data.status) {
      throw new Error(globalResponseHandler(data, res.status));
    }

    return data.message;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

import {
  globalErrorHandler,
  globalResponseHandler,
} from "@/helpers/globalResponseHandler";
import { baseUrl } from "@/lib/fetch/apiSetup";
import {
  distributorPartnerInputs,
  DistributorPartnerResponse,
} from "@/types/support/PartnersTypes";

export async function postDistributorData(formData: distributorPartnerInputs) {
  try {
    const res = await fetch(`${baseUrl}/partner-distribution`, {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...formData }),
    });

    const data: DistributorPartnerResponse = await res.json();

    if (!res.ok || !data.status) {
      throw new Error(globalResponseHandler(data, res.status));
    }

    return data.message;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

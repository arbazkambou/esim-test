import {
  globalErrorHandler,
  globalResponseHanlder,
} from "@/helpers/globalResponseHandler";
import {
  distributorPartnerInputs,
  DistributorPartnerResponse,
} from "@/types/support/PartnersTypes";
import api from "../../lib/axios/apiSetup";

export async function postDistributorData(formData: distributorPartnerInputs) {
  try {
    const response = await api.post<DistributorPartnerResponse>(
      "/partner-distribution",
      {
        ...formData,
      },
    );
    if (!response.data.status) {
      throw new Error(globalResponseHanlder(response));
    }
    return response.data.message;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

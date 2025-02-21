import {
  distributorPartnerInputs,
  DistributorPartnerResponse,
} from "@/types/support/PartnersTypes";
import devApi from "../axios/apiSetupDev";
import {
  globalErrorHandler,
  globalResponseHanlder,
} from "@/helpers/globalResponseHandler";

export async function postDistributorData(formData: distributorPartnerInputs) {
  try {
    const response = await devApi.post<DistributorPartnerResponse>(
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

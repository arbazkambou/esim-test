import {
  globalErrorHandler,
  globalResponseHanlder,
} from "@/helpers/globalResponseHandler";
import { MyEsims } from "@/types/purchase/MyEsims";
import { OrderHistory } from "@/types/purchase/OrderHistory";
import { SimRelatedPackages } from "@/types/purchase/SimRelatedPackages";
import { DataVoiceSimUsage, SimUsage } from "@/types/purchase/SimUsage";
import {
  WalletRefill,
  WalletRefillInputs,
} from "@/types/purchase/WalletRefill";
import api from "../axios/apiSetup";

export async function getOrderHistory() {
  try {
    const response = await api.get<OrderHistory>("/user/order");

    if (!response.data.status) {
      throw new Error(globalResponseHanlder(response));
    }

    return response.data.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

export async function getDataOnlySims() {
  try {
    const response = await api.get<MyEsims>("/my-sims");

    if (!response.data.status) {
      throw new Error(globalResponseHanlder(response));
    }
    return response.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

export async function getDataVoiceSims() {
  try {
    const response = await api.get<MyEsims>("/my-sims", {
      params: { type: "voice" },
    });

    if (!response.data.status) {
      throw new Error(globalResponseHanlder(response));
    }

    return response.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

export async function walletRefill({
  amount,
  landing_redirect_url,
}: WalletRefillInputs) {
  try {
    const response = await api.get<WalletRefill>("/user/can-pay", {
      params: { amount, landing_redirect_url },
    });

    if (!response.data.data.verified || !response.data.status) {
      if (response.data.message) {
        throw new Error(response.data.message);
      } else {
        throw new Error("Something went wrong during wallet refill");
      }
    }
    return response.data.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

export async function getSimRelatedPackages(simId: string) {
  try {
    const response = await api.get<SimRelatedPackages>(
      `/my-sim/${simId}/related-packages`,
    );

    if (!response.data.status) {
      throw new Error(globalResponseHanlder(response));
    }
    return response.data.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

export async function getDataOnlySimUsage(simId: string) {
  try {
    const response = await api.get<SimUsage>(`/my-sim/${simId}/usage`);

    if (!response.data.status) {
      throw new Error(globalResponseHanlder(response));
    }

    return response.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

export async function getDataVoiceSimUsage(simId: string) {
  try {
    const response = await api.get<DataVoiceSimUsage>(
      `/my-sim/data-voice/${simId}/usage`,
    );

    if (!response.data.status) {
      throw new Error(globalResponseHanlder(response));
    }

    return response.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

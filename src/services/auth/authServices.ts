import devApi from "@/services/axios/apiSetupDev";
import {
  globalErrorHandler,
  globalResponseHanlder,
} from "@/helpers/globalResponseHandler";
import {
  LoginUserInputType,
  LoginUserResponseType,
} from "@/types/auth/LoginUserTypes";
import {
  SendPasswordResetDataInputType,
  SendPasswordResetDataResponseType,
  SendPasswordResetPinResponseType,
} from "@/types/auth/PasswordResetTypes";
import {
  RegisterUserInputTypes,
  RegisterUserResponseType,
} from "@/types/auth/RegisterUserTypes";
import {
  SendOTPInputType,
  SendOTPResponseType,
} from "@/types/auth/sendOTPTypes";

export async function sendOTP({ email, password }: SendOTPInputType) {
  try {
    const response = await devApi.post<SendOTPResponseType>("/send-otp", {
      email,
      password,
    });

    if (!response.data.status) {
      throw new Error(globalResponseHanlder(response));
    }

    return response.data.message;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

export async function registerUser({
  name,
  email,
  password,
  otp,
}: RegisterUserInputTypes) {
  try {
    const response = await devApi.post<RegisterUserResponseType>("/register", {
      name,
      email,
      password,
      otp,
    });

    if (!response.data.status) {
      throw new Error(globalResponseHanlder(response));
    }
    return response.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

export async function loginUser({ email, password }: LoginUserInputType) {
  try {
    const response = await devApi.post<LoginUserResponseType>("/login", {
      email,
      password,
    });
    if (!response.data.status) {
      throw new Error(globalResponseHanlder(response));
    }
    return response.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

export async function sendPasswordResetPin(email: string) {
  try {
    const response = await devApi.post<SendPasswordResetPinResponseType>(
      "/password-reset",
      { email },
    );

    if (!response.data.status) {
      throw new Error(globalResponseHanlder(response));
    }

    return response.data.message;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

export async function sendPasswordResetData({
  email,
  password,
  password_confirmation,
  token,
}: SendPasswordResetDataInputType) {
  try {
    const response = await devApi.post<SendPasswordResetDataResponseType>(
      "/password-reset/submit",
      {
        email,
        password,
        password_confirmation,
        token,
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

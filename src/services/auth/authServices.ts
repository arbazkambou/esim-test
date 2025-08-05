import {
  globalErrorHandler,
  globalResponseHanlder,
} from "@/helpers/globalResponseHandler";
import {
  LoginUserInputType,
  LoginUserResponseType,
  SocialLoginInputs,
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
import api from "../../lib/axios/apiSetup";

export async function sendOTP({ email, password }: SendOTPInputType) {
  try {
    const response = await api.post<SendOTPResponseType>("/send-otp", {
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
  is_affiliate,
  phone_number,
}: RegisterUserInputTypes) {
  try {
    let response;
    if (is_affiliate) {
      response = await api.post<RegisterUserResponseType>("/register", {
        name,
        email,
        password,
        otp,
        is_affiliate,
        phone_number,
      });
    } else {
      response = await api.post<RegisterUserResponseType>("/register", {
        name,
        email,
        password,
        otp,
        phone_number,
      });
    }

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
    const response = await api.post<LoginUserResponseType>("/login", {
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
    const response = await api.post<SendPasswordResetPinResponseType>(
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
    const response = await api.post<SendPasswordResetDataResponseType>(
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

export async function socialLogin(inputs: SocialLoginInputs) {
  try {
    const response = await api.post<LoginUserResponseType>("/social/login", {
      ...inputs,
    });

    if (!response.data.status) {
      throw new Error(globalResponseHanlder(response));
    }

    return response.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

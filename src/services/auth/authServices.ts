import {
  globalErrorHandler,
  globalHttpErrorHandler,
  globalResponseHandler,
} from "@/helpers/globalResponseHandler";
import { baseUrl } from "@/lib/fetch/apiSetup";
import {
  LoginUserInputType,
  LoginUserResponseType,
  SocialLoginInputs,
} from "@/types/auth/LoginUserTypes";
import {
  SendPasswordResetDataInputType,
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
    const response = await fetch(`${baseUrl}/send-otp`, {
      headers: {
        "Content-Type": "application/json",
      },

      method: "POST",

      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error(globalHttpErrorHandler(response));
    }

    const data: SendOTPResponseType = await response.json();

    if (!data.status) {
      throw new Error(globalResponseHandler(data, response.status));
    }

    return data.message;
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
}: RegisterUserInputTypes) {
  try {
    const response = await fetch(`${baseUrl}/register`, {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        otp,
        is_affiliate: is_affiliate ? is_affiliate : false,
      }),
      method: "POST",
    });

    if (!response.ok) {
      throw new Error(globalHttpErrorHandler(response));
    }

    const data: RegisterUserResponseType = await response.json();

    if (!data.status) {
      throw new Error(globalResponseHandler(data, response.status));
    }

    return data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

export async function loginUser({ email, password }: LoginUserInputType) {
  try {
    const response = await fetch(`${baseUrl}/login`, {
      body: JSON.stringify({ email, password }),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(globalHttpErrorHandler(response));
    }

    const data: LoginUserResponseType = await response.json();

    if (!data.status) {
      throw new Error(globalResponseHandler(data, response.status));
    }

    return data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

export async function sendPasswordResetPin(email: string) {
  try {
    const response = await fetch(`${baseUrl}/password-reset`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      throw new Error(globalHttpErrorHandler(response));
    }

    const data: SendPasswordResetPinResponseType = await response.json();

    if (!data.status) {
      throw new Error(globalResponseHandler(data, response.status));
    }

    return data.message;
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
    const response = await fetch(`${baseUrl}/password-reset/submit`, {
      method: "POST",
      body: JSON.stringify({ email, password, password_confirmation, token }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(globalHttpErrorHandler(response));
    }

    const data = await response.json();

    if (!data.status) {
      throw new Error(globalResponseHandler(data, response.status));
    }

    return data.message;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

export async function socialLogin(inputs: SocialLoginInputs) {
  try {
    const response = await fetch(`${baseUrl}/social/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...inputs }),
    });

    if (!response.ok) {
      throw new Error(globalHttpErrorHandler(response));
    }

    const data: LoginUserResponseType = await response.json();

    if (!data.status) {
      throw new Error(globalResponseHandler(response, response.status));
    }

    return data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

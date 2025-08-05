export interface SendPasswordResetPinInputType {
  email: string;
}

export interface SendPasswordResetPinResponseType {
  status: boolean;
  message: string;
  errors?: string[];
}

export interface SendPasswordResetDataInputType {
  email: string;
  password: string;
  password_confirmation: string;
  token: string;
}

export interface SendPasswordResetDataResponseType {
  status: boolean;
  message: string;
  errors?: string[];
}

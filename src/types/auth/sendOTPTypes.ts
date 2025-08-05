export interface SendOTPInputType {
  email: string;
  password: string;
}

export interface SendOTPResponseType {
  status: boolean;
  message: string;
  errors?: string[];
}

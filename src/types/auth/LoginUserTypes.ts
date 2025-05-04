export interface LoginUserInputType {
  email: string;
  password: string;
}

export interface AdminRole {
  nonce: string;
  type: string;
}

export interface LoginUserType {
  id: number;
  name: string;
  email: string;
  role_id: number;
  updated_at: string;
  created_at: string;
  email_verified_at: string;
  blocked: string | null;
  deleted_at: string | null;
  image_url: string | null;
  phone_number: string | null;
}

export interface LoginUserResponseType {
  status: boolean;
  message: string;
  errors?: string[];
  access_token: string;
  user: LoginUserType;
  data: AdminRole;
}

export interface SocialLoginInputs {
  provider_name: string;
  email: string | null;
  name: string | null;
  access_token: string | undefined;
}

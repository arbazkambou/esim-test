import { AdminRole } from "./LoginUserTypes";

export interface RegisterUserInputTypes {
  name: string;
  email: string;
  password: string;
  otp: string;
  is_affiliate?: number;
  phone_number?: string;
}

// interface RegisterUserRoleType {
//   id: number;
//   name: string;
//   guard_name: string;
//   created_at: string;
//   updated_at: string;
//   pivot: {
//     model_id: number;
//     role_id: number;
//   };
// }

export interface RegisterUserType {
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
  // roles: RegisterUserRoleType[];
}

export interface RegisterUserResponseType {
  status: boolean;
  message: string;
  errors?: string[];
  access_token: string;
  token_type: string;
  user: RegisterUserType;
  data: AdminRole;
}

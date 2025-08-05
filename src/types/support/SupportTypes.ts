export interface PostContactUsDataInputs {
  email: string;
  subject: string;
  phone_number: string;
  "g-recaptcha-response": string;
  message: string;
}

export interface PostContactUsData {
  status: boolean;
  message: string;
  errors: string[];
}

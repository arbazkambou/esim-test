import { z } from "zod";

export function getPasswordResetFormSchema(isOTPSent: boolean) {
  const passwordResetFormSchema = z
    .object({
      email: z
        .string()
        .email({ message: "Please enter a valid email address." }),
      password: isOTPSent
        ? z
            .string()
            .min(8, "Password must be at least 8 characters long.")
            .max(100, "Password must be less than 100 characters.")
        : z.string().optional(),
      confirmPassword: isOTPSent
        ? z
            .string()
            .min(8, {
              message: "Confirm Password must be at least 8 characters long.",
            })
            .max(100, {
              message: "Confirm Password must be less than 100 characters.",
            })
        : z.string().optional(),
      otp: isOTPSent
        ? z
            .string()
            .min(4, { message: "OTP must be at least 4 characters long." })
            .max(6, { message: "OTP must be at most 6 characters long." })
        : z.string().optional(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Password do not match.",
      path: ["confirmPassword"],
    });

  return passwordResetFormSchema;
}

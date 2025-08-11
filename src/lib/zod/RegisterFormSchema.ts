import { z } from "zod";

export function getRegisterFormSchema(isOTPSent: boolean) {
  const registerFormSchema = z
    .object({
      name: z
        .string()
        .min(4, "Name must be at least 4 characters long.")
        .max(100, "Name must be less than 100 characters."),
      email: z
        .string()
        .email({ message: "Please enter a valid email address." }),
      password: z
        .string()
        .min(8, "Password must be at least 8 characters long.")
        .max(100, "Password must be less than 100 characters."),
      confirmPassword: z
        .string()
        .min(8, {
          message: "Confirm Password must be at least 8 characters long.",
        })
        .max(100, {
          message: "Confirm Password must be less than 100 characters.",
        }),
      phoneNumber: z.preprocess(
        (v) => (typeof v === "string" && v.trim() === "" ? undefined : v),
        z
          .string()
          .max(15, "Too long for a phone number")
          .regex(/^\+?[0-9]{10,15}$/, "Invalid phone number format")
          .optional(),
      ),

      otp: isOTPSent
        ? z
            .string()
            .min(4, { message: "OTP must be at least 4 characters long." })
            .max(4, { message: "OTP must be at most 4 characters long." })
        : z.string().optional(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Password do not match.",
      path: ["confirmPassword"],
    });

  return registerFormSchema;
}

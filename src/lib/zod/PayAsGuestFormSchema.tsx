import { z } from "zod";

interface PropsType {
  isCartHavePhonicoPackage: boolean;
  isCartHaveUltimatePackage: boolean;
  isUserExist: boolean;
}

export function getPayAsGuestFormSchema({
  isCartHavePhonicoPackage,
  isUserExist,
  isCartHaveUltimatePackage,
}: PropsType) {
  const formSchema = z.object({
    name: !isUserExist
      ? z.string().min(2, {
          message: "Name must be at least 2 characters.",
        })
      : z.string().optional(),
    email: z.string().email({ message: "Please enter a valid email address." }),
    imei:
      !isUserExist && (isCartHavePhonicoPackage || isCartHaveUltimatePackage)
        ? z
            .string()
            .min(1, { message: "IMEI is required" })
            .max(20, { message: "Invalid IMEI" })
        : z.string().optional(),

    zip_code:
      !isUserExist && isCartHavePhonicoPackage
        ? z
            .string()
            .min(1, { message: "Zip code is required" })
            .max(20, { message: "Invalid Zip code" })
        : z.string().optional(),

    password: isUserExist
      ? z
          .string()
          .min(1, "Password is required.")
          .max(100, "Password must be less than 100 characters.")
      : z.string().optional(),
  });

  return formSchema;
}

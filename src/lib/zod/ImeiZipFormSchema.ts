"use client";

import { z } from "zod";

export function getImeiZipFormSchema(isCartPhonicoPackage: boolean) {
  const ImeiZIpFormSchema = z.object({
    imei: z
      .string()
      .min(1, { message: "IMEI is required" })
      .max(20, { message: "Invalid IMEI" }),

    zip_code: isCartPhonicoPackage
      ? z
          .string()
          .min(1, { message: "Zip code is required" })
          .max(20, { message: "Invalid Zip code" })
      : z.string().optional(),
  });

  return ImeiZIpFormSchema;
}

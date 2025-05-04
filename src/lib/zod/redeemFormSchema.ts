import { z } from "zod";

export const redeemFormSchema = z.object({
  iccid: z
    .string()
    .min(4, "Please enter a valid ICCID or SIM ID")
    .max(50, "Please enter a valid ICCID or SIM ID"),
});

import { z } from "zod";

export const careersFormSchema = z.object({
  name: z
  .string()
  .min(2, { message: "Full Name must be at least 2 characters long" })
  .max(50, { message: "Full Name must not exceed 50 characters" })
  .nonempty({ message: "Full Name is required" }),

  email: z
  .string()
  .email({ message: "Please enter a valid email address" })
  .nonempty({ message: "Email is required" }),

  linkedIn: z
  .string()
  .url({message: "Please add a valid linkedIn Profile"})
  .nonempty({message: "LinkedIn Profile is required" }),

});

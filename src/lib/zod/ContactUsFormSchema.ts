"use client";

import { z } from "zod";

export const contactUsFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Full Name must be at least 2 characters long" })
    .max(50, { message: "Full Name must not exceed 50 characters" })
    .nonempty({ message: "Full Name is required" }),

  email: z
    .string()
    .email({ message: "Please enter a valid email address" })
    .nonempty({ message: "Email is required" }),

  subject: z
    .string()
    .max(200, { message: "Subject should be under 200 characters" })
    .nonempty({ message: "Please provide a subject for your message" }),

  phone_number: z
    .string()
    .max(100, { message: "Phone number is too long" })
    .nonempty({ message: "Phone number is required" }),

  message: z
    .string()
    .max(600, { message: "Message should not exceed 600 characters" })
    .nonempty({ message: "Message field cannot be empty" }),
});

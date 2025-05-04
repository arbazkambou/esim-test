"use client";

import { z } from "zod";

export const distributorPartnerFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." })
    .max(50, { message: "Name cannot exceed 50 characters." })
    .nonempty({ message: "Full name is required." }),

  email: z
    .string()
    .email({ message: "Please enter a valid email address." })
    .nonempty({ message: "Email is required." }),

  business_name: z
    .string()
    .max(200, { message: "Business name cannot exceed 200 characters." })
    .nonempty({ message: "Business name is required." }),

  phone_number: z
    .string()
    .min(6, { message: "Please enter a valid phone number." })
    .max(20, { message: "Phone number cannot exceed 20 characters." })
    .nonempty({ message: "Phone number is required." }),

  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long." })
    .max(100, { message: "Password cannot exceed 100 characters." })
    .nonempty({ message: "Password is required." }),

  business_address: z
    .string()
    .max(200, { message: "Business address cannot exceed 200 characters." })
    .nonempty({ message: "Business address is required." }),

  whatsapp_number: z
    .string()
    .min(6, { message: "Please enter a valid WhatsApp number." })
    .max(20, { message: "WhatsApp number cannot exceed 20 characters." })
    .nonempty({ message: "WhatsApp number is required." }),

  expected_clients: z
    .string()
    .min(1, { message: "Please enter the number of expected clients." })
    .nonempty({ message: "Expected clients field is required." }),

  expected_sales: z
    .string()
    .nonempty({ message: "Expected sales per month is required." }),

  how_to_sell: z
    .string()
    .nonempty({ message: "Please specify where you plan to sell." }),

  // website: z.string().nonempty({ message: "Please select a website option." }),

  website_url: z.string().optional(),
  message: z
    .string()
    .min(10, { message: "Requirements must be at least 10 characters long." })
    .nonempty({ message: "Please describe your requirements." }),
});

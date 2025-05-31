import { z } from "zod";

export const clientSchema = z.object({
  full_name: z
    .string()
    .min(1, "Full name is required")
    .max(255, "Full name is too long (max: 255 characters)"),
  company_name: z
    .string()
    .max(255, "Company name is too long (max: 255 characters)")
    .optional(),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  short_description: z
    .string()
    .min(1, "Project description is required")
    .max(1000, "Project description is too long (max: 1000 characters)"),
});

export type ClientFormFields = z.infer<typeof clientSchema>; 
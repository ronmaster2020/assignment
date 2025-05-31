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
  phone: z.string().regex(/^[0-9]{10}$/, "Phone number must be exactly 10 digits"),
  short_description: z
    .string()
    .min(1, "Project description is required")
    .max(1000, "Project description is too long (max: 1000 characters)"),
});

export type ClientFormFields = z.infer<typeof clientSchema>; 
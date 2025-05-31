import { z } from "zod";

export const candidateSchema = z.object({
  full_name: z
    .string()
    .min(1, "Full name is required")
    .max(255, "Full name is too long (max: 255 characters)"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^[0-9]{10}$/, "Phone number must be exactly 10 digits"),
  resume: z
    .any()
    .refine((files) => files instanceof FileList && files.length > 0, {
      message: "File is required",
    })
    .refine((files) => {
      const file = files[0];
      if (!file) return false;
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      return allowedTypes.includes(file.type);
    }, "Only .pdf, .doc, and .docx files are allowed"),
});

export type CandidateFormFields = z.infer<typeof candidateSchema>; 
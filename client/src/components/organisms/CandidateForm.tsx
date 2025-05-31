import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import useFormSubmit from "../../hooks/useFormSubmit";
import InputField from "../molecules/InputField";
import Button from "../atoms/Button";
import FileUpload from "../molecules/FileUpload";

const schema = z.object({
  full_name: z
    .string()
    .min(1, "Full name is required")
    .max(255, "Full name is too long (max: 255 characters)"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  resume: z
    .any()
    .refine((files) => files instanceof FileList && files.length > 0, {
      message: "File is required",
    })
    .refine((files) => {
      const file = files[0];
      if (!file) return false;
      const allowedTypes = [
        // .pdf, .doc, .docx
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      return allowedTypes.includes(file.type);
    }, "Only .pdf, .doc, and .docx files are allowed"),
});

type FormFields = z.infer<typeof schema>;

interface Props {
  onSubmitSuccess: () => void;
}

const CandidateForm = ({ onSubmitSuccess }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const FormSubmit = useFormSubmit({
    endpoint: "candidate",
    onSubmitSuccess,
    isFormData: true,
  });

  return (
    <div className="form-container container">
      <div className="row justify-content-center">
        <div className="col px-0">
          <h5 className="form-heading text-start">For Potential Candidates</h5>
          <p className="form-description text-start text-muted pb-3">
            Want to Join a Fast-Paced, Impactful Team?
          </p>

          <form
            onSubmit={handleSubmit(FormSubmit.handleSubmit)}
            className="d-grid gap-2"
            encType="multipart/form-data"
          >
            {FormSubmit.error && (
              <div className="alert alert-danger" role="alert">
                {FormSubmit.error}
              </div>
            )}
            <InputField
              label="Full Name"
              placeholder=" "
              name="full_name"
              register={register}
              error={!!errors.full_name}
            />
            {errors.full_name && (
              <div className="text-danger">{errors.full_name.message}</div>
            )}

            <InputField
              label="Email"
              type="email"
              placeholder=" "
              name="email"
              register={register}
              error={!!errors.email}
            />
            {errors.email && (
              <div className="text-danger">{errors.email.message}</div>
            )}

            <InputField
              label="Phone"
              type="tel"
              placeholder=" "
              name="phone"
              register={register}
              error={!!errors.phone}
            />
            {errors.phone && (
              <div className="text-danger">{errors.phone.message}</div>
            )}

            <FileUpload
              name="resume"
              register={register}
              setValue={setValue}
              error={!!errors.resume}
            />
            {typeof errors.resume?.message === "string" && (
              <div className="text-danger">{errors.resume.message}</div>
            )}

            <div className="mt-3">
              <Button type="submit">Apply Now</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CandidateForm;

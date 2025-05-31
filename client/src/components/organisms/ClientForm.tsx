import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import useFormSubmit from "../../hooks/useFormSubmit";
import InputField from "../molecules/InputField";
import TextareaField from "../molecules/TextareaField";
import Button from "../atoms/Button";

const schema = z.object({
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

type FormFields = z.infer<typeof schema>;

interface Props {
  onSubmitSuccess: () => void;
}

const ClientForm = ({ onSubmitSuccess }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const FormSubmit = useFormSubmit({
    endpoint: "client",
    onSubmitSuccess,
    isFormData: false,
  });

  return (
    <div className="form-container container">
      <div className="row justify-content-center">
        <div className="col px-0">
          <h5 className="form-heading text-start">For Potential Clients</h5>
          <p className="form-description text-start text-muted pb-3">
            Deadline looming? Project stuck? Don't wait. Talk to us today and
            let's ignite your project together!
          </p>

          <form
            onSubmit={handleSubmit(FormSubmit.handleSubmit)}
            className="d-grid gap-2"
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
              label="Company Name"
              placeholder=" "
              name="company_name"
              register={register}
              error={!!errors.company_name}
            />
            {errors.company_name && (
              <div className="text-danger">{errors.company_name.message}</div>
            )}

            <InputField
              label="Email"
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
              placeholder=" "
              name="phone"
              register={register}
              error={!!errors.phone}
            />
            {errors.phone && (
              <div className="text-danger">{errors.phone.message}</div>
            )}

            <TextareaField
              label="Short Project Description/Need"
              name="short_description"
              placeholder=" "
              register={register}
              error={!!errors.short_description}
            />
            {errors.short_description && (
              <div className="text-danger">
                {errors.short_description.message}
              </div>
            )}

            <div className="mt-3">
              <Button type="submit">Send Request</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ClientForm;

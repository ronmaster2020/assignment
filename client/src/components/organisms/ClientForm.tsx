import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useFormSubmit from "../../hooks/useFormSubmit";
import InputField from "../molecules/InputField";
import TextareaField from "../molecules/TextareaField";
import Button from "../atoms/Button";
import {
  clientSchema,
  type ClientFormFields,
} from "../../schemas/clientSchema";

interface Props {
  onSubmitSuccess: () => void;
}

const ClientForm = ({ onSubmitSuccess }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ClientFormFields>({
    resolver: zodResolver(clientSchema),
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
              error={
                typeof errors.full_name?.message === "string"
                  ? errors.full_name.message
                  : undefined
              }
            />

            <InputField
              label="Company Name"
              placeholder=" "
              name="company_name"
              register={register}
              error={
                typeof errors.company_name?.message === "string"
                  ? errors.company_name.message
                  : undefined
              }
            />

            <InputField
              label="Email"
              placeholder=" "
              name="email"
              register={register}
              error={
                typeof errors.email?.message === "string"
                  ? errors.email.message
                  : undefined
              }
            />

            <InputField
              label="Phone"
              placeholder=" "
              name="phone"
              register={register}
              error={
                typeof errors.phone?.message === "string"
                  ? errors.phone.message
                  : undefined
              }
            />

            <TextareaField
              label="Short Project Description/Need"
              name="short_description"
              placeholder=" "
              register={register}
              error={
                typeof errors.short_description?.message === "string"
                  ? errors.short_description.message
                  : undefined
              }
            />

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

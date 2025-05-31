import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useFormSubmit from "../../hooks/useFormSubmit";
import InputField from "../molecules/InputField";
import Button from "../atoms/Button";
import FileUpload from "../molecules/FileUpload";
import {
  candidateSchema,
  type CandidateFormFields,
} from "../../schemas/candidateSchema";

interface Props {
  onSubmitSuccess: () => void;
}

const CandidateForm = ({ onSubmitSuccess }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<CandidateFormFields>({
    resolver: zodResolver(candidateSchema),
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
              error={
                typeof errors.full_name?.message === "string"
                  ? errors.full_name.message
                  : undefined
              }
            />

            <InputField
              label="Email"
              type="email"
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
              type="tel"
              placeholder=" "
              name="phone"
              register={register}
              error={
                typeof errors.phone?.message === "string"
                  ? errors.phone.message
                  : undefined
              }
            />

            <FileUpload
              name="resume"
              register={register}
              setValue={setValue}
              error={
                typeof errors.resume?.message === "string"
                  ? errors.resume.message
                  : undefined
              }
            />

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

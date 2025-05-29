import React, { useState } from "react";
import useFormSubmit from "../../hooks/useFormSubmit";
import InputField from "../molecules/InputField";
import Button from "../atoms/Button";

interface Props {
  onSubmitSuccess: () => void;
}

const CandidateForm = ({ onSubmitSuccess }: Props) => {
  const [formData, setFormData] = useState<{
    full_name: string;
    email: string;
    phone: string;
    resume: File | string;
  }>({
    full_name: "",
    email: "",
    phone: "",
    resume: "",
  });

  const { error, handleSubmit } = useFormSubmit({
    endpoint: "candidate",
    onSubmitSuccess,
    isFormData: true,
  });

  const updateFormData = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = event.target;

    if (type === "file") {
      const fileInput = event.target as HTMLInputElement;
      const file = fileInput.files?.[0];
      setFormData((prev) => ({
        ...prev,
        [name]: file || "",
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });
    await handleSubmit(formDataToSend);
  };

  return (
    <div className="form-container container">
      <div className="row justify-content-center">
        <div className="col px-0">
          <h5 className="form-heading text-start">For Potential Candidates</h5>
          <p className="form-description text-start text-muted pb-3">
            Want to Join a Fast-Paced, Impactful Team?
          </p>

          <form onSubmit={onSubmit} className="d-grid gap-2">
            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}
            <InputField
              label="Full Name"
              type="text"
              placeholder=" "
              name="full_name"
              value={formData.full_name}
              onChange={updateFormData}
              required
            />

            <InputField
              label="Email"
              type="email"
              placeholder=" "
              name="email"
              value={formData.email}
              onChange={updateFormData}
              required
            />

            <InputField
              label="Phone"
              type="tel"
              placeholder=" "
              name="phone"
              value={formData.phone}
              onChange={updateFormData}
              required
            />

            <div className="form-group">
              <div className="file-upload">
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  accept=".pdf"
                  onChange={updateFormData}
                />
                <div className="icon-wrapper">
                  <img
                    className="icon"
                    src="/icons/Icon_upload.png"
                    alt="upload icon"
                  />
                </div>
                <div>Upload your CV</div>
                <small>Drag and drop your file here</small>
              </div>
            </div>

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

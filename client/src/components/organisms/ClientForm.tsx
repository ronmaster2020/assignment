import React, { useState } from "react";
import useFormSubmit from "../../hooks/useFormSubmit";
import InputField from "../molecules/InputField";

interface Props {
  onSubmitSuccess: () => void;
}

const ClientForm = ({ onSubmitSuccess }: Props) => {
  const [formData, setFormData] = useState({
    full_name: "",
    company_name: "",
    email: "",
    phone: "",
    short_description: "",
  });

  const { error, handleSubmit } = useFormSubmit({
    endpoint: "client",
    onSubmitSuccess,
    isFormData: false,
  });

  const updateFormData = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await handleSubmit(formData);
  };

  return (
    <div className="form-container container">
      <div className="row justify-content-center">
        <div className="col px-0">
          <h5 className="form-heading text-start">For Potential Clients</h5>
          <p className="form-description text-start text-muted pb-3">
            Deadline looming? Project stuck? Don't wait. Talk to us today and
            let's ignite your project together!
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
              label="Company Name"
              type="text"
              placeholder=" "
              name="company_name"
              value={formData.company_name}
              onChange={updateFormData}
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

            <div className="form-group mb-4">
              <textarea
                className="form-control"
                id="short_description"
                placeholder=" "
                name="short_description"
                rows={3}
                value={formData.short_description}
                onChange={updateFormData}
                required
              />
              <label htmlFor="short_description" className="form-label">
                Short Project Description/Need
              </label>
            </div>

            <div className="d-grid">
              <button type="submit" className="btn submit-btn">
                Send Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ClientForm;

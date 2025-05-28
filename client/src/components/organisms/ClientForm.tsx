import React, { useState } from "react";
import useFormSubmit from "../../hooks/useFormSubmit";

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
        <div className="col">
          <h5 className="form-heading text-start">For Potential Clients</h5>
          <p className="form-description text-start text-muted">
            Deadline looming? Project stuck? Don't wait. Talk to us today and
            let's ignite your project together!
          </p>

          <form onSubmit={onSubmit}>
            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}
            <div className="form-group mb-2">
              <input
                type="text"
                className="form-control"
                id="full_name"
                placeholder=" "
                name="full_name"
                value={formData.full_name}
                onChange={updateFormData}
                required
              />{" "}
              <label htmlFor="full_name" className="form-label">
                Full Name
              </label>
            </div>

            <div className="form-group mb-2">
              <input
                type="text"
                className="form-control"
                id="company_name"
                placeholder=" "
                name="company_name"
                value={formData.company_name}
                onChange={updateFormData}
              />{" "}
              <label htmlFor="company_name" className="form-label">
                Company Name
              </label>
            </div>

            <div className="form-group mb-2">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder=" "
                name="email"
                value={formData.email}
                onChange={updateFormData}
                required
              />{" "}
              <label htmlFor="email" className="form-label">
                Email
              </label>
            </div>

            <div className="form-group mb-2">
              <input
                type="tel"
                className="form-control"
                id="phone"
                placeholder=" "
                name="phone"
                value={formData.phone}
                onChange={updateFormData}
                required
                pattern="[0-9]{10}"
              />{" "}
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
            </div>

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
              />{" "}
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

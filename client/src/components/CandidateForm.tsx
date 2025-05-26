import React, { useState } from "react";
import { ApiError, handleApiError } from "../utils/apiError";

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

  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

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

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await fetch(
        "http://localhost:3000/api/leads/candidate",
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      await handleApiError(response);

      // Success!
      onSubmitSuccess();
    } catch (error) {
      if (error instanceof ApiError) {
        setError(error.message);
      } else {
        setError("An unexpected error occurred");
      }
    }
  };

  return (
    <div className="form-container container">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <h5 className="form-heading text-start">For Potential Candidates</h5>
          <p className="form-description text-start text-muted">
            Want to Join a Fast-Paced, Impactful Team?
          </p>

          <form onSubmit={handleSubmit}>
            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}
            {success && (
              <div className="alert alert-success" role="alert">
                {success}
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

            <div className="d-grid">
              <button type="submit" className="btn submit-btn">
                Apply Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CandidateForm;

import React, { useState } from "react";

type FormData = {
  FullName: string;
  Email: string;
  Phone: string;
  Resume: File | string;
};

const CandidateForm = () => {
  const [formData, setFormData] = useState<FormData>({
    FullName: "",
    Email: "",
    Phone: "",
    Resume: "",
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

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
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
            <div className="form-group mb-2">
              <input
                type="text"
                className="form-control"
                id="FullName"
                placeholder=" "
                name="FullName"
                value={formData.FullName}
                onChange={updateFormData}
                required
              />{" "}
              <label htmlFor="FullName" className="form-label">
                Full Name
              </label>
            </div>

            <div className="form-group mb-2">
              <input
                type="email"
                className="form-control"
                id="Email"
                placeholder=" "
                name="Email"
                value={formData.Email}
                onChange={updateFormData}
                required
              />{" "}
              <label htmlFor="Email" className="form-label">
                Email
              </label>
            </div>

            <div className="form-group mb-2">
              <input
                type="tel"
                className="form-control"
                id="Phone"
                placeholder=" "
                name="Phone"
                value={formData.Phone}
                onChange={updateFormData}
                required
                pattern="[0-9]{10}"
              />{" "}
              <label htmlFor="Phone" className="form-label">
                Phone
              </label>
            </div>

            <div className="form-group mb-4">
              <div className="file-upload">
                <input
                  type="file"
                  id="Resume"
                  name="Resume"
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

            <div className="d-grid mb-5">
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

import React from "react";
import type { ReactNode } from "react";

const CandidateForm = () => {
  return (
    <div className="form-container container">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <h5 className="form-heading text-start">For Potential Candidates</h5>
          <p className="form-description text-start text-muted">
            Want to Join a Fast-Paced, Impactful Team?
          </p>

          <form>
            <div className="form-group mb-2">
              <input
                type="text"
                className="form-control"
                id="FullName"
                placeholder=" "
                name="FullName"
                value=""
                required
              />{" "}
              <label htmlFor="FullName" className="form-label">
                Full Name
              </label>
            </div>

            <div className="form-group mb-2">
              <input
                type="Email"
                className="form-control"
                id="Email"
                placeholder=" "
                name="Email"
                value=""
                required
              />{" "}
              <label htmlFor="Email" className="form-label">
                Email
              </label>
            </div>

            <div className="form-group mb-2">
              <input
                type="Phone"
                className="form-control"
                id="Phone"
                placeholder=" "
                name="Phone"
                value=""
                required
              />{" "}
              <label htmlFor="Phone" className="form-label">
                Phone
              </label>
            </div>

            <div className="form-group mb-4">
              <div className="file-upload">
                <input type="file" accept=".pdf" />
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

import React from "react";
import type { ReactNode } from "react";

const ClientForm = () => {
  return (
    <div className="form-container container mb-4">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <h5 className="form-heading text-start">For Potential Clients</h5>
          <p className="form-description text-start text-muted">
            Deadline looming? Project stuck? Don't wait. Talk to us today and
            let's ignite your project together!
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
                type="Company Name"
                className="form-control"
                id="CompanyName"
                placeholder=" "
                name="CompanyName"
                value=""
                required
              />{" "}
              <label htmlFor="CompanyName" className="form-label">
                Company Name
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
              <textarea
                className="form-control"
                id="Description"
                placeholder=" "
                name="Description"
                rows={3}
                required
              />{" "}
              <label htmlFor="Description" className="form-label">
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

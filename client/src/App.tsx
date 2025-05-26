import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="page-container bg-light">
      {/* Header */}
      <header className="header fixed-top d-flex justify-content-center align-items-center bg-dark">
        <div className="header-logo"></div>
      </header>

      {/* Body */}
      <main>
        <h1 className="main-heading display-4 text-center">
          Igniting Your Development at Record Speed!
        </h1>
        <p className="main-description text-center pb-3 mb-3">
          Stuck with a major development project and an impossible deadline?
          We're here to make the impossible a reality. SprintIgnite specializes
          in instantly kickstarting complex projects and delivering quality
          results so fast, it will leave you (pleasantly) shocked!
        </p>

        {/* Unique Card */}
        <div className="info-card w-100 p-3">
          <h5>Who We Are</h5>
          <p>
            Sprintignite is your go-to development company for critical moments.
            We are a lean team of experts (led by Muhammad and Tal) who
            understand that in the startup world, time is the most precious
            resource. Our mission is to take your ambitious development project,
            no matter how large or how tight the schedule, and propel it forward
            with unmatched efficiency and speed. We don't fear challenges – we
            thrive on them.
          </p>
        </div>

        {/* Other sections */}
        <h5 className="section-heading mt-5">Our Services</h5>
        <div className="icon-paragraph">
          <div className="icon-wrapper">
            <img className="icon" src="/icons/Icon_bolt.png" alt="bolt icon" />
          </div>
          <p className="section-paragraph text-start m-0">
            Rapid Project Kickoff: No time to waste. We lump In quickly, deline
            critical needs, and set up a dedicated development team that starts
            working on your project immediately.
          </p>
        </div>
        <div className="icon-paragraph">
          <div className="icon-wrapper">
            <img
              className="icon"
              src="/icons/Icon_tachometer_alt.png"
              alt="tachometer icon"
            />
          </div>
          <p className="section-paragraph text-start m-0">
            Accelerated Sprint-Based Development: We work with agile
            methodologies, breaking large projects into short, focused sprints,
            delivering measurable progress and quality outputs at a fast pace.
          </p>
        </div>
        <div className="icon-paragraph">
          <div className="icon-wrapper">
            <img className="icon" src="/icons/Icon_cogs.png" alt="cogs icon" />
          </div>
          <p className="section-paragraph text-start m-0">
            Expertise in Complex Projects: We have the experience and capability
            to handle complex technological projects requiring deep expertise
            and creative solutions.
          </p>
        </div>
        <div className="icon-paragraph">
          <div className="icon-wrapper">
            <img
              className="icon"
              src="/icons/Icon_users.png"
              alt="users icon"
            />
          </div>
          <p className="section-paragraph text-start m-0">
            Elite Dev Teams: We provide access to experienced and professional
            development teams, precisely tailored to your project\'s needs and
            scope.
          </p>
        </div>

        <h5 className="section-heading mt-4">
          Our Specialization - Your Advantage!
        </h5>
        <p className="section-paragraph text-start pl">
          Sprintignite's specialty is taking projects that other companies would
          call "impossible on this deadline" – and proving otherwise. We
          understand that sometimes you need to invest a bit more to get results
          much faster, saving precious time that's worth much more money down
          the line. Our approach is "Pay a little more, get it twice as fast" –
          we don't compromise on quality and commit to a speed that will help
          your startup reach the market before competitors.
        </p>

        <h5 className="section-heading mt-4">Who We Are For?</h5>
        <p className="section-paragraph text-start pl">
          Startups needing to launch an MVP (Minimum Viable Product) in record
          time. Companies hitting a development bottleneck and needing a "task
          force" to break through. Ventures with a short window of opportunity
          that must release a product quickly. Anyone who understands that time
          is critical and is willing to invest for a fast, high-quality
          development solution.
        </p>

        <h5 className="section-heading mt-5 mb-4">Contact Us</h5>
        <div className="form-container container mb-4">
          <div className="row justify-content-center">
            <div className="col-md-5">
              <h5 className="form-heading text-start">For Potential Clients</h5>
              <p className="form-description text-start text-muted">
                Deadline looming? Project stuck? Don't wait. Talk to us today
                and let's ignite your project together!
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
        <div className="form-container container">
          <div className="row justify-content-center">
            <div className="col-md-5">
              <h5 className="form-heading text-start">
                For Potential Candidates
              </h5>
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
      </main>
      <div className="footer-wrapper">
        <footer className="footer">
          © 2025 Sprint Ignite. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

export default App;

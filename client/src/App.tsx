import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ClientForm from "./components/ClientForm";
import CandidateForm from "./components/CandidateForm";

function App() {
  return (
    <div className="page-container bg-light">
      {/* Header */}
      <header className="header fixed-top d-flex justify-content-center align-items-center bg-dark">
        <div className="header-logo"></div>
      </header>

      {/* Body */}
      <main>
        <h1 className="main-heading display-4 text-center fw-bold">
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
        <ClientForm />
        <CandidateForm />
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

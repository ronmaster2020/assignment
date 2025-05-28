import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ClientForm from "./components/ClientForm";
import CandidateForm from "./components/CandidateForm";
import IconParagraph from "./components/IconParagraph";
import TextSection from "./components/TextSection";
import InfoCard from "./components/InfoCard";
import HeroSection from "./components/HeroSection";
import SuccessMessage from "./components/SuccessMessage";

function App() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = () => {
    setFormSubmitted(true);
  };

  return (
    <div className="page-container bg-light">
      <Header />

      {/* Body */}
      <main>
        <div className="container p-0">
          <div className="row justify-content-center">
            <div className="col-sm-12 col-md-10 col-lg-8">
              <div className="pb-3">
                <HeroSection
                  title="Igniting Your Development at Record Speed!"
                  description="Stuck with a major development project and an impossible deadline?
                  We're here to make the impossible a reality. SprintIgnite specializes
                  in instantly kickstarting complex projects and delivering quality
                  results so fast, it will leave you (pleasantly) shocked!"
                />
              </div>
              {/* Unique Card */}
              <InfoCard
                title="Who We Are"
                content="Sprintignite is your go-to development company for critical moments.
                  We are a lean team of experts (led by Muhammad and Tal) who
                  understand that in the startup world, time is the most precious
                  resource. Our mission is to take your ambitious development project,
                  no matter how large or how tight the schedule, and propel it forward
                  with unmatched efficiency and speed. We don't fear challenges – we
                  thrive on them."
              />
              {/* Other sections */}
              <h5 className="section-heading mt-5">Our Services</h5>
              <IconParagraph
                icon="/icons/Icon_bolt.png"
                alt="bolt icon"
                text="Rapid Project Kickoff: No time to waste. We lump In quickly, deline
                  critical needs, and set up a dedicated development team that starts
                  working on your project immediately."
              />
              <IconParagraph
                icon="/icons/Icon_tachometer_alt.png"
                alt="tachometer icon"
                text="Accelerated Sprint-Based Development: We work with agile
                  methodologies, breaking large projects into short, focused sprints,
                  delivering measurable progress and quality outputs at a fast pace."
              />
              <IconParagraph
                icon="/icons/Icon_cogs.png"
                alt="cogs icon"
                text="Expertise in Complex Projects: We have the experience and capability
                  to handle complex technological projects requiring deep expertise
                  and creative solutions."
              />
              <IconParagraph
                icon="/icons/Icon_users.png"
                alt="users icon"
                text="Elite Dev Teams: We provide access to experienced and professional
                  development teams, precisely tailored to your project\'s needs and
                  scope."
              />
              <div className="mt-5">
                <TextSection
                  heading="Our Specialization - Your Advantage!"
                  paragraph='Sprintignite&apos;s specialty is taking projects that other
                    companies would call "impossible on this deadline" – and proving otherwise.
                    We understand that sometimes you need to invest a bit more to get results much faster,
                    saving precious time that&apos;s worth much more money down the line.
                    Our approach is "Pay a little more, get it twice as fast" – we don&apos;t compromise on
                    quality and commit to a speed that will help your startup reach the market before competitors.'
                />
              </div>
              <div className="mt-4">
                <TextSection
                  heading="Who We Are For?"
                  paragraph='Startups needing to launch an MVP (Minimum Viable Product) in record
                time. Companies hitting a development bottleneck and needing a "task
                force" to break through. Ventures with a short window of opportunity
                that must release a product quickly. Anyone who understands that time
                is critical and is willing to invest for a fast, high-quality
                development solution.'
                />
              </div>
              <h5 className="section-heading mt-5 mb-4">Contact Us</h5>
              <div className="container mb-4 pb-2 px-0">
                <div className="row justify-content-center">
                  <div className="col" style={{ maxWidth: "600px" }}>
                    {formSubmitted ? (
                      <SuccessMessage
                        heading="Thanks from SprintIgnite!"
                        message="We've received your details and are on it! Expect a swift response from our team. We're ready to get things moving!"
                      />
                    ) : (
                      <>
                        <div className="mb-4">
                          <ClientForm onSubmitSuccess={handleFormSubmit} />
                        </div>
                        <CandidateForm onSubmitSuccess={handleFormSubmit} />
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;

function Header() {
  return (
    <header className="header fixed-top d-flex justify-content-center align-items-center bg-dark">
      <div className="header-logo"></div>
    </header>
  );
}

function Footer() {
  return (
    <div className="footer-wrapper">
      <footer className="footer">
        © 2025 Sprint Ignite. All rights reserved.
      </footer>
    </div>
  );
}

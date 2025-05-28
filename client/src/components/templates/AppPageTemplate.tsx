import { useState } from "react";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import FormContainer from "../organisms/FormContainer";
import IconParagraph from "../molecules/IconParagraph";
import Section from "../molecules/Section";
import InfoCard from "../organisms/InfoCard";
import HeroSection from "../organisms/HeroSection";

const AppPageTemplate = () => {
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
              <div className="mt-5">
                <Section heading="Our Services">
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
                </Section>
              </div>
              <div className="mt-5 pl">
                <Section heading="Our Specialization - Your Advantage!">
                  <p className="section-paragraph text-start">
                    Sprintignite&apos;s specialty is taking projects that other
                    companies would call "impossible on this deadline" – and
                    proving otherwise. We understand that sometimes you need to
                    invest a bit more to get results much faster, saving
                    precious time that&apos;s worth much more money down the
                    line. Our approach is "Pay a little more, get it twice as
                    fast" – we don&apos;t compromise on quality and commit to a
                    speed that will help your startup reach the market before
                    competitors.
                  </p>
                </Section>
              </div>
              <div className="mt-4">
                <Section heading="Who We Are For?">
                  <p className="section-paragraph text-start pl">
                    Startups needing to launch an MVP (Minimum Viable Product)
                    in record time. Companies hitting a development bottleneck
                    and needing a "task force" to break through. Ventures with a
                    short window of opportunity that must release a product
                    quickly. Anyone who understands that time is critical and is
                    willing to invest for a fast, high-quality development
                    solution.
                  </p>
                </Section>
              </div>

              <div className="mt-4 mb-4 pl">
                <Section heading="Contact Us">
                  <FormContainer
                    formSubmitted={formSubmitted}
                    handleFormSubmit={handleFormSubmit}
                  />
                </Section>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AppPageTemplate;

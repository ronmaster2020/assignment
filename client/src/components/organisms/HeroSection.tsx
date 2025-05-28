interface Props {
  title: string;
  description: string;
}

const HeroSection = ({ title, description }: Props) => {
  return (
    <>
      <h1 className="main-heading display-4 text-center fw-bold pb-2">
        {title}
      </h1>
      <p className="main-description text-center">{description}</p>
    </>
  );
};

export default HeroSection;

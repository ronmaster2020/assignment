interface Props {
  heading: string;
  paragraph: string;
}

const TextSection = ({ heading, paragraph }: Props) => {
  return (
    <>
      <h5 className="section-heading">{heading}</h5>
      <p className="section-paragraph text-start pl">{paragraph}</p>
    </>
  );
};

export default TextSection;

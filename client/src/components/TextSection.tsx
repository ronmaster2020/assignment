import React from "react";

interface Props {
  heading: string;
  paragraph: string;
}

const TextSection = ({ heading, paragraph }: Props) => {
  return (
    <div>
      <h5 className="section-heading">{heading}</h5>
      <p className="section-paragraph text-start pl">{paragraph}</p>
    </div>
  );
};

export default TextSection;

interface Props {
  icon: string;
  alt?: string;
  text: string;
}

const IconParagraph = ({ icon, alt, text }: Props) => {
  return (
    <div className="icon-paragraph">
      <div className="icon-wrapper">
        <img className="icon" src={icon} alt={alt || "icon"} />
      </div>
      <p className="section-paragraph text-start m-0">{text}</p>
    </div>
  );
};

export default IconParagraph;

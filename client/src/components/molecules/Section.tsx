interface Props {
  heading: string;
  children: React.ReactNode;
}

const Section = ({ heading, children }: Props) => {
  return (
    <>
      <h5 className="section-heading">{heading}</h5>
      <div className="section-body d-flex flex-column gap-3 text-start">
        {children}
      </div>
    </>
  );
};

export default Section;

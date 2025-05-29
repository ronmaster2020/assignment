import type { LabelHTMLAttributes } from "react";

interface Props extends LabelHTMLAttributes<HTMLLabelElement> {}

const Label = (props: Props) => {
  return <label className="form-label" {...props} />;
};

export default Label;

import type { TextareaHTMLAttributes } from "react";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  required?: boolean;
}

const Textarea = ({ required, ...props }: Props) => {
  return (
    <textarea
      className="w-100 form-control"
      {...props}
      {...(required && { required: true })}
    />
  );
};

export default Textarea;

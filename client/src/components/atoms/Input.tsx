import type { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  required?: boolean;
}

const Input = ({ required, ...props }: Props) => {
  return (
    <input
      className="w-100 form-control"
      {...props}
      {...(required && { required: true })}
    />
  );
};

export default Input;

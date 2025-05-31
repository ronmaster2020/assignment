import type { InputHTMLAttributes } from "react";
import type { UseFormRegister } from "react-hook-form";
import "./Input.css";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  required?: boolean;
  register?: UseFormRegister<any>;
  error?: boolean;
}

const Input = ({ required, register, error, ...props }: Props) => {
  return (
    <input
      className={`w-100 form-control ${error ? "input-error" : ""}`}
      {...props}
      {...(required && { required: true })}
      {...(register && register(props.name || ""))}
    />
  );
};

export default Input;

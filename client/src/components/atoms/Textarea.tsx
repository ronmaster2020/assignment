import type { TextareaHTMLAttributes } from "react";
import type { UseFormRegister } from "react-hook-form";
import "./Input.css";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  required?: boolean;
  register?: UseFormRegister<any>;
  error?: boolean;
}

const Textarea = ({ required, register, error, ...props }: Props) => {
  return (
    <textarea
      className={`w-100 form-control ${error ? "input-error" : ""}`}
      {...props}
      {...(required && { required: true })}
      {...(register && register(props.name || ""))}
    />
  );
};

export default Textarea;

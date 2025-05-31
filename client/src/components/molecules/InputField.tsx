import Input from "../atoms/Input";
import Label from "../atoms/Label";
import type { UseFormRegister } from "react-hook-form";
import ErrorMessage from "../atoms/ErrorMessage";

interface Props {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  register?: UseFormRegister<any>;
  error?: string;
}

const InputField = ({
  label,
  name,
  placeholder,
  type = "text",
  required,
  register,
  error,
}: Props) => {
  return (
    <div className="form-group">
      <div className="input-wrapper">
        <Input
          type={type}
          name={name}
          placeholder={placeholder}
          required={required}
          register={register}
          error={!!error}
        />
        <Label htmlFor={name}>{label}</Label>
      </div>
      <ErrorMessage message={error} />
    </div>
  );
};

export default InputField;

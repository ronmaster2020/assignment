import Input from "../atoms/Input";
import Label from "../atoms/Label";
import type { UseFormRegister } from "react-hook-form";

interface Props {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  register?: UseFormRegister<any>;
  error?: boolean;
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
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        register={register}
        error={error}
      />
      <Label htmlFor={name}>{label}</Label>
    </div>
  );
};

export default InputField;

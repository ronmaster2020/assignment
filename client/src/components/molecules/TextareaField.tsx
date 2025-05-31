import type { UseFormRegister } from "react-hook-form";
import Textarea from "../atoms/Textarea";
import Label from "../atoms/Label";

interface Props {
  label: string;
  name: string;
  placeholder?: string;
  rows?: number;
  required?: boolean;
  register?: UseFormRegister<any>;
  error?: boolean;
}

const TextareaField = ({
  label,
  name,
  placeholder,
  rows = 4,
  register,
  required = false,
  error,
}: Props) => {
  return (
    <div className="form-group">
      <Textarea
        name={name}
        placeholder={placeholder}
        rows={rows}
        required={required}
        register={register}
        error={error}
      />
      <Label htmlFor={name}>{label}</Label>
    </div>
  );
};

export default TextareaField;

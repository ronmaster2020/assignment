import type { UseFormRegister } from "react-hook-form";
import Textarea from "../atoms/Textarea";
import Label from "../atoms/Label";
import ErrorMessage from "../atoms/ErrorMessage";

interface Props {
  label: string;
  name: string;
  placeholder?: string;
  rows?: number;
  required?: boolean;
  register?: UseFormRegister<any>;
  error?: string;
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
      <div className="input-wrapper">
        <Textarea
          name={name}
          placeholder={placeholder}
          rows={rows}
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

export default TextareaField;

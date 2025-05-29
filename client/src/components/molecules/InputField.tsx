import Input from "../atoms/Input";
import Label from "../atoms/Label";

type Props = {
  label: string;
  name: string;
  value: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputField = ({
  label,
  name,
  value,
  placeholder,
  type = "text",
  onChange,
  required = false,
}: Props) => (
  <div className="form-group">
    <Input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
    />
    <Label htmlFor={name}>{label}</Label>
  </div>
);

export default InputField;

import Textarea from "../atoms/Textarea";
import Label from "../atoms/Label";

type Props = {
  label: string;
  name: string;
  value: string;
  placeholder?: string;
  rows?: number;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const TextareaField = ({
  label,
  name,
  value,
  placeholder,
  rows = 4,
  onChange,
  required = false,
}: Props) => (
  <div className="form-group">
    <Textarea
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      required={required}
    />
    <Label htmlFor={name}>{label}</Label>
  </div>
);

export default TextareaField;

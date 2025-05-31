import type { UseFormRegister, UseFormSetValue } from "react-hook-form";
import ErrorMessage from "../atoms/ErrorMessage";
import Input from "../atoms/Input";

interface Props {
  name: string;
  label?: string;
  subLabel?: string;
  accept?: string;
  error?: string;
  register?: UseFormRegister<any>;
  setValue?: UseFormSetValue<any>;
}

const FileUpload = ({
  name,
  accept = ".pdf,.doc,.docx",
  label = "Upload your CV",
  subLabel = "Drag and drop your file here (PDF, DOC, DOCX)",
  error,
  register,
  setValue,
}: Props) => {
  return (
    <div className="form-group">
      <div className="file-upload">
        <Input
          type="file"
          accept={accept}
          name={name}
          error={!!error}
          onChange={(e) => {
            if (setValue) {
              setValue(name, e.target.files?.[0], { shouldValidate: true });
            }
          }}
          register={register}
        />
        <div className="icon-wrapper">
          <img
            className="icon"
            src="/icons/Icon_upload.png"
            alt="upload icon"
          />
        </div>
        <div>{label}</div>
        <small>{subLabel}</small>
      </div>
      <ErrorMessage message={error} />
    </div>
  );
};

export default FileUpload;

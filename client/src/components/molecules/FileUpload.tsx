import { useState } from "react";
import type { UseFormRegister } from "react-hook-form";
import ErrorMessage from "../atoms/ErrorMessage";
import Input from "../atoms/Input";

interface Props {
  name: string;
  label?: string;
  subLabel?: string;
  accept?: string;
  error?: string;
  register?: UseFormRegister<any>;
}

const FileUpload = ({
  name,
  accept = ".pdf,.doc,.docx",
  label = "Upload your CV",
  subLabel = "Drag and drop your file here (PDF, DOC, DOCX)",
  error,
  register,
}: Props) => {
  const [fileName, setFileName] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div className="form-group">
      <div className="file-upload">
        <Input
          type="file"
          accept={accept}
          name={name}
          className={`form-control ${error ? "input-error" : ""}`}
          {...(register &&
            register(name, {
              onChange: handleFileChange,
            }))}
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
      {fileName && (
        <div className="px-3 py-1 text-muted">Selected file: {fileName}</div>
      )}
      <ErrorMessage message={error} />
    </div>
  );
};

export default FileUpload;

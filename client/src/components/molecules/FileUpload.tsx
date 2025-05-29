import type { ChangeEvent } from "react";

type Props = {
  name: string;
  accept?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  subLabel?: string;
};

const FileUpload = ({
  name,
  accept = ".pdf,.doc,.docx",
  onChange,
  label = "Upload your CV",
  subLabel = "Drag and drop your file here (PDF, DOC, DOCX)",
}: Props) => (
  <div className="form-group">
    <div className="file-upload">
      <input
        type="file"
        id={name}
        name={name}
        accept={accept}
        onChange={onChange}
      />
      <div className="icon-wrapper">
        <img className="icon" src="/icons/Icon_upload.png" alt="upload icon" />
      </div>
      <div>{label}</div>
      <small>{subLabel}</small>
    </div>
  </div>
);

export default FileUpload;

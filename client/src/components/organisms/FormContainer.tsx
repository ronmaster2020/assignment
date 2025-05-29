import SuccessMessage from "../molecules/SuccessMessage";

interface Props {
  formSubmitted: boolean;
  successHeading: string;
  successMessage: string;
  forms: React.ReactNode;
}

const FormContainer = ({
  formSubmitted,
  successHeading,
  successMessage,
  forms,
}: Props) => {
  return (
    <div className="container mb-4 pb-2 px-0">
      <div className="row justify-content-center">
        <div className="col" style={{ maxWidth: "600px" }}>
          {formSubmitted ? (
            <SuccessMessage heading={successHeading} message={successMessage} />
          ) : (
            forms
          )}
        </div>
      </div>
    </div>
  );
};

export default FormContainer;

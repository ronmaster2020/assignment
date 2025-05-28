import ClientForm from "./ClientForm";
import CandidateForm from "./CandidateForm";
import SuccessMessage from "../molecules/SuccessMessage";

interface Props {
  formSubmitted: boolean;
  handleFormSubmit: () => void;
}

const FormContainer = ({ formSubmitted, handleFormSubmit }: Props) => {
  return (
    <div className="container mb-4 pb-2 px-0">
      <div className="row justify-content-center">
        <div className="col" style={{ maxWidth: "600px" }}>
          {formSubmitted ? (
            <SuccessMessage
              heading="Thanks from SprintIgnite!"
              message="We've received your details and are on it! Expect a swift response from our team. We're ready to get things moving!"
            />
          ) : (
            <>
              <div className="mb-4">
                <ClientForm onSubmitSuccess={handleFormSubmit} />
              </div>
              <CandidateForm onSubmitSuccess={handleFormSubmit} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormContainer;

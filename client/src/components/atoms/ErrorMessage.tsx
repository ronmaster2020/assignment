interface Props {
  message?: string;
}

const ErrorMessage = ({ message }: Props) => {
  if (!message) return null;
  return <div className="px-3 text-danger">{message}</div>;
};

export default ErrorMessage;

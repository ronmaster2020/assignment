import React from "react";

interface Props {
  heading: string;
  message: string;
}

const SuccessMessage = ({ heading, message }: Props) => {
  return (
    <div className="success-message-container">
      <h5 className="success-message-heading">{heading}</h5>
      <p className="success-message-text">{message}</p>
    </div>
  );
};

export default SuccessMessage;

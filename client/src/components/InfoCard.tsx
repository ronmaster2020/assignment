import React from "react";

interface Props {
  title: string;
  content: string;
}

const InfoCard = ({ title, content }: Props) => {
  return (
    <div className="info-card p-3">
      <h5>{title}</h5>
      <p>{content}</p>
    </div>
  );
};

export default InfoCard;

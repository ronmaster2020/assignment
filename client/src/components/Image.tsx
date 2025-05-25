import React from "react";

interface Props {
  image?: string;
}

const styles = {
  ImageContainer: {
    width: "157px",
    height: "109px",
    borderRadius: "8px",
    backgroundImage: "url(./image.png)",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  } as React.CSSProperties,
};

const defaultProps = {
  image:
    "https://assets.api.uizard.io/api/cdn/stream/2660c27c-7d28-4f1e-b491-dc3ed295dccd.png",
};

const Image = ({ image }: Props) => {
  return (
    <div
      style={{
        ...styles.ImageContainer,
        backgroundImage: `url(${image ?? defaultProps.image})`,
      }}
    />
  );
};

export default Image;

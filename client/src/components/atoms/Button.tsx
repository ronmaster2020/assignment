import type { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const Button = ({ variant = "primary", className = "", ...props }: Props) => {
  return (
    <button
      className={`w-100 btn ${
        variant === "primary" ? "submit-btn" : ""
      } ${className}`}
      {...props}
    />
  );
};

export default Button;

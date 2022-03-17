import { FC, HTMLAttributes } from "react";
import "./button-style.scss";

interface ButtonProps {
  label: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  customStyle?: HTMLAttributes<HTMLButtonElement>;
}
const Button: FC<ButtonProps> = (props) => {
  const { label, type, onClick, customStyle } = props;
  return (
    <button
      type={type ?? "button"}
      onClick={onClick}
      className="button"
      style={customStyle}
    >
      {label}{" "}
    </button>
  );
};

export default Button;

import { ChangeEvent, FC } from "react";
import "./input-style.scss";

interface InputProps {
  type?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
const Input: FC<InputProps> = (props) => {
  const { type, onChange } = props;
  return <input className="input" type={type} onChange={onChange} />;
};

export default Input;

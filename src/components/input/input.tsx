import { ChangeEvent, FC, RefObject } from "react";
import "./input-style.scss";

interface InputProps {
  type?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  placeHolder?: string;
  referance?: RefObject<HTMLInputElement>;
}
const Input: FC<InputProps> = (props) => {
  const { type, onChange, name, placeHolder, referance } = props;
  return (
    <input
      className="input"
      type={type}
      name={name}
      placeholder={placeHolder}
      onChange={onChange}
      ref={referance}
    />
  );
};

export default Input;

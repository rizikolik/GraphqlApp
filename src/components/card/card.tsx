import { FC } from "react";
import "./card-style.scss";
const Card: FC = ({ children }) => {
  return <div className="card">{children}</div>;
};

export default Card;

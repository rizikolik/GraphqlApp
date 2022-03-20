import { FC } from "react";
import "./cardContainer-style.scss";

const CardContainer: FC = ({ children }) => {
  return <div className="cardContainer">{children}</div>;
};

export default CardContainer;

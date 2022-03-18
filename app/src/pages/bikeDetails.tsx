import { FC } from "react";
import { useParams } from "react-router-dom";
const BikeDetails: FC = () => {
  const { bikeId } = useParams();
  console.log("mounted")
  return <div>fgdgfdgfdgfdgfdgfdgdfgdfgfdgdfgdfgfdgdf</div>;
};

export default BikeDetails;

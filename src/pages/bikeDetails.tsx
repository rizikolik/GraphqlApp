import { FC } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/card/card";
import CardContainer from "../components/cardContainer/cardContainer";
import Spinner from "../components/spinner/spinner";
import CustomTable from "../components/table/table";
import useBikeData from "../hooks/useBikeData";

const BikeDetails: FC = () => {
  const { bikeId } = useParams();
  const { rows, bikes, loading, error } = useBikeData(bikeId);
  if (loading || error) return <Spinner />;
  return (
    <CardContainer>
      <Card>
        <div>
          <h4 style={{ textAlign: "center" }}>Bike Id:{bikeId}</h4>
        </div>
      </Card>
      <Card>
        <CustomTable
          rows={rows}
          data={bikes}
          onClickRoute={{ link: "bikes/", key: "bike_id" }}
        />
      </Card>
    </CardContainer>
  );
};

export default BikeDetails;

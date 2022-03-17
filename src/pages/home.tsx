import { useEffect, useState } from "react";
import CustomTable from "../components/table/table";
import { Bike, ResponseData } from "../typeUtils/api";
import { bikeData, FETCH_URL } from "../utils/contants";
import customFetch from "../utils/customFetch";

const Home = () => {
  const [bikes, setBikes] = useState<Bike[] | null>(null);
  const rows = ["Id", "Lat", "Long", "Reserved", "Disabled", "Type"];

  useEffect(() => {
    const getBikes = async () => {
      const result: ResponseData = await customFetch(FETCH_URL);
      //if (result) setBikes(result.data.bikes);
      setBikes(bikeData);
    };
    getBikes();
  }, []);
  return (
    <CustomTable
      rows={rows}
      data={bikes}
      onClickRoute={{ link: "bikes/", key: "bike_id" }}
    />
  );
};

export default Home;

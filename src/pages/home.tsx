import { useCallback, useEffect, useState } from "react";
import Card from "../components/card/card";
import CardContainer from "../components/cardContainer/cardContainer";
import SearchForm from "../components/searchForm/searchForm";
import CustomTable from "../components/table/table";
import { Bike, ResponseData } from "../typeUtils/api";
import { bikeData, FETCH_URL } from "../utils/contants";
import customFetch from "../utils/customFetch";

const Home = () => {
  const [bikes, setBikes] = useState<Bike[] | null>(null);
  const rows = [
    "Id",
    "Lat",
    "Long",
    "Reserved",
    "Disabled",
    "Type",
    "Android",
    "IOS",
  ];

  useEffect(() => {
    const getBikes = async () => {
      const result: ResponseData = await customFetch(FETCH_URL);
      //if (result) setBikes(result.data.bikes);
      setBikes(bikeData);
    };
    getBikes();
  }, []);

  const handleSubmit = useCallback(() => {
    console.log("HERE THE VALUE");
  }, []);
  return (
    <CardContainer>
      <Card>
        <SearchForm onSubmit={handleSubmit} />
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

export default Home;

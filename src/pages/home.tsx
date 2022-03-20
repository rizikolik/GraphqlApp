import Card from "../components/card/card";
import CardContainer from "../components/cardContainer/cardContainer";
import SearchForm from "../components/searchForm/searchForm";
import CustomTable from "../components/table/table";
import useBikeData from "../hooks/useBikeData";

const Home = () => {
  const { bikes, rows, handleSearch } = useBikeData();

  return (
    <CardContainer>
      <Card>
        <SearchForm onSubmit={handleSearch} />
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

import Card from "../components/card/card";
import CardContainer from "../components/cardContainer/cardContainer";
import SearchForm from "../components/searchForm/searchForm";
import Spinner from "../components/spinner/spinner";
import CustomTable from "../components/table/table";
import useBikeData from "../hooks/useBikeData";

function Home() {
  const { bikes, rows, handleSearch, loading, searchInputRef, error } =
    useBikeData();
  if (loading || error) return <Spinner />;
  return (
    <CardContainer>
      <Card>
        <SearchForm onSubmit={handleSearch} referance={searchInputRef} />
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
}

export default Home;

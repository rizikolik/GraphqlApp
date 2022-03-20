import { FC, RefObject } from "react";
import Button from "../button/button";
import Input from "../input/input";

import "./searchForm-style.scss";

interface SearchFormPropsType {
  onSubmit: () => void;
  referance?: RefObject<HTMLInputElement>;
}
const SearchForm: FC<SearchFormPropsType> = (props) => {
  const { onSubmit, referance } = props;
  return (
    <form className="searchForm">
      <Input referance={referance} />
      <div className="searchForm__buttonWrapper">
        <Button onClick={onSubmit} label="Search a Bike" />
      </div>
    </form>
  );
};

export default SearchForm;

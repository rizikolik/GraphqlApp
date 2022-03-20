import { FC } from "react";
import Button from "../button/button";
import Input from "../input/input";

import "./searchForm-style.scss";
interface SearchFormPropsType {
  onSubmit: () => void;
}
const SearchForm: FC<SearchFormPropsType> = (props) => {
  const { onSubmit } = props;
  return (
    <form className="form">
      <Input />
      <div className="form__buttonWrapper">
        <Button onClick={onSubmit} label="Search a Bike" />
      </div>
    </form>
  );
};

export default SearchForm;

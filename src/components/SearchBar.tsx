// https://wenku.csdn.net/answer/c269a74c74f34899b606865cd3498f11?ydreferer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8%3D

// https://plainenglish.io/blog/how-to-implement-a-search-bar-in-react-js

// https://github.com/TZawalich/React_Search_Components

import { ChangeEventHandler } from "react";

interface searchTerm {
  value: string;
  searchHandler: ChangeEventHandler;
  placeholder: string;
}

const SearchBar = (props: searchTerm) => {
  return (
    <input
      type="search"
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.searchHandler}
    ></input>
  );
};

export default SearchBar;

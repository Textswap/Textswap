// https://wenku.csdn.net/answer/c269a74c74f34899b606865cd3498f11?ydreferer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8%3D

// https://plainenglish.io/blog/how-to-implement-a-search-bar-in-react-js

// https://github.com/TZawalich/React_Search_Components

import React, { ChangeEventHandler, FormEvent } from "react";
import Form from "react-bootstrap/Form";
import { Search } from "react-bootstrap-icons";

interface searchTerm {
  value: string;
  searchHandler: ChangeEventHandler;
  placeholder: string;
  submitHandler: (e: FormEvent) => void;
}

const SearchBar = (props: searchTerm) => {
  return (
    <Form className="search-bar" onSubmit={props.submitHandler}>
      <Form.Control
        type="text"
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.searchHandler}
        className="search-input rounded-pill"
      />
      <button type="submit" className="search-button">
        <Search />
      </button>
    </Form>
  );
};

export default SearchBar;

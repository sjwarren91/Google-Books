import React, { Component } from "react";
import SearchBar from "../components/SearchBar";
import Book from "../components/Book";

class Search extends Component {

  state = {
    books: []
  }

  handleFormSubmit = event => {
    event.preventDefault();

  } 

  render() {
    return (
      <React.Fragment>
        <SearchBar />
      </React.Fragment>
    );
  }
}

export default Search;

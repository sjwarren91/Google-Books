import React, { Component } from "react";
import Book from "./Book";
import API from "../utils/API";

class SearchBar extends Component {
  state = {
    books: [],
    title: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title) {
      API.getBooks(this.state.title)
        .then(data => {
          console.log(data);
          this.setState({
            books: data.data.items,
            title: ""
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  saveBook = id => {
    const book = this.state.books.filter(book => book.id === id);
    console.log(book);
    API.saveBook({
      title: book[0].volumeInfo.title,
      authors: book[0].volumeInfo.authors,
      description: book[0].volumeInfo.description,
      image: book[0].volumeInfo.imageLinks.thumbnail,
      link: book[0].volumeInfo.infoLink
    })
      .then(res => console.log("Book Saved"))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <>
        <div className="card text-center">
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="bookSearch">Book Search</label>
                <input
                  type="text"
                  className="form-control"
                  id="bookSearch"
                  aria-describedby="bookHelp"
                  placeholder="Search for a book"
                  name="title"
                  onChange={this.handleInputChange}
                />
                <small id="bookHelp" className="form-text text-muted">
                  Find your favourite books!
                </small>
              </div>
              <button
                onClick={this.handleFormSubmit}
                disabled={!this.state.title}
                type="submit"
                className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div style={{ marginTop: 25 + "px" }}>
          {this.state.books.length ? (
            this.state.books.map(book => (
              <Book
                key={book.id}
                _id={book.id}
                title={book.volumeInfo.title}
                authors={book.volumeInfo.authors}
                description={book.volumeInfo.description}
                image={book.volumeInfo.imageLinks.thumbnail}
                link={book.volumeInfo.infoLink}
                state="save"
                saveBook={this.saveBook}
              />
            ))
          ) : (
            <div className="text-center">
              <h1>Search for a book</h1>
            </div>
          )}
        </div>
      </>
    );
  }
}

export default SearchBar;

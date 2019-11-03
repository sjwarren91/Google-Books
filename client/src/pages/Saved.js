import React, { Component } from "react";
import Book from "../components/Book";
import API from "../utils/API";

class Saved extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getSaved()
      .then(data => {
        console.log(data.data);
        this.setState({ books: data.data });
      })
      .catch(err => console.log(err));
  };

  deleteBook = () => {
    
  }

  render() {
    return (
      <div style={{ marginTop: 25 + "px" }}>
        {this.state.books.length ? (
          this.state.books.map(book => (
            <Book
              key={book._id}
              title={book.title}
              authors={book.authors}
              description={book.description}
              image={book.image}
              link={book.link}
              state={"delete"}
            />
          ))
        ) : (
          <div className="text-center">
            <h1>No Saved Books.</h1>
          </div>
        )}
      </div>
    );
  }
}

export default Saved;

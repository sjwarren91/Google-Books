import axios from "axios";

export default {
  getBooks: (title) => {
    let params = title.toLowerCase().replace(/ /g, "+");
    let queryString = `https://www.googleapis.com/books/v1/volumes?q=${params}&key=${process.env.REACT_APP_API_KEY}`;
    console.log(queryString)
    return axios.get(queryString);
  },

  saveBook: (bookData) => {
    console.log(bookData);
    return axios.post("/api/books", bookData);
  }
}
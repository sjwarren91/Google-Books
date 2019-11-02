import React from "react";
import "./Jumbotron.css";

function Jumbotron() {
  return (
    <div className="jumbotron jumbotron-fluid text-center">
      <div className="container">
        <h1 className="display-3">Google Books</h1>
        <p className="lead">Search for and Save books of interest!</p>
      </div>
    </div>
  );
}

export default Jumbotron;

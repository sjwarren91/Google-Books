import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron"

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="content">
        <Jumbotron />
        </div>
      </>
    );
  }
}

export default App;

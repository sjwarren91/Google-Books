import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="header">
      <div className="container">
        <div className="logo">
          <img src="./Google-Books.png" alt="Logo" />
        </div>
        <div className="links">
          <a href="/">Search</a>
          <a href="/">Saved</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

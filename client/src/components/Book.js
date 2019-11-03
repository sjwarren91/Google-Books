import React, { Component } from "react";
import SaveBtn from "./SaveBtn";
import DeleteBtn from "./DeleteBtn";
import "./Book.css";

function Book(props) {
  return (
    <div className="card pl-5 mt-4 mb-4">
      <div className="card-body">
        <div className="row">
          <div className="col-lg-10">
            <h5 className="card-title">{props.title}</h5>

            {props.authors.length < 2 ? (
              <p>Written by: {props.authors[0]}</p>
            ) : (
              <p>
                Written by:{" "}
                {props.authors.map((author, i) => {
                  if (i === props.authors.length - 1) {
                    return author;
                  } else {
                    return author + ", ";
                  }
                })}
              </p>
            )}
          </div>
          <div className="col-lg-2">
            {props.state === "save" ? (
              <SaveBtn onClick={() => props.saveBook(props._id)} />
            ) : (
              <DeleteBtn onClick={() => props.deleteBook(props._id)} />
            )}

            <a role="button" href={props.link} target="_blank" className="btn btn-info" style={{ margin: 5 + "px" }}>
              Link
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <img src={props.image} alt="placeholder" />
          </div>
          <div className="col-lg-9">
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book;

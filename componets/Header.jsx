import React from "react";
import { Link } from "react-router-dom";

function header(props) {
  return (
    //<Link to="/">
    <header>
      <div className="container">
        <h2>{props.text}</h2>
      </div>
    </header>
    //</Link>
  );
}

export default header;

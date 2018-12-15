import React from "react";

const Jumbotron = props => (
  <div className="jumbotron mx-auto text-white">
    <div className = "container">
        <h1>{props.headline}</h1>
        <p>Guess the card you havent't clicked yet.</p>
    </div>
  </div>
);

export default Jumbotron;
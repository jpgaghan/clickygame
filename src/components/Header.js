import React from "react";

const Navbar = props => (
    <header>
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <h2 class="navbar-brand text-white mx-auto align-middle">Clicky Game</h2>
        <p class = "text-white mr-1">Current Score: {props.score}</p>
        <p class = "text-white">Top Score: {props.topscore}</p>
      </nav>
    </header>
);

export default Navbar;

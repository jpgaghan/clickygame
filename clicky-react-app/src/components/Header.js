import React from "react";

const Navbar = props => (
    <header>
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <h1 class="navbar-brand text-white mx-auto align-middle">Fixed navbar</h1>
        <p class = "text-white mr-1">Current Score: {props.score}</p>
        <p class = "text-white">Top Score: {props.topscore}</p>
      </nav>
    </header>
);

export default Navbar;

import React from "react";

import { Link } from "react-router-dom";

import "../../assets/css/Header.css";

function Header() {
  return (
    <header className="header-style">
      <h1>TodoList</h1>
      <Link to="/">Home</Link> | <Link to="/about">About</Link>
    </header>
  );
}

export default Header;

import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header style={headerStyle}>
      <h1>Todo List</h1>
      <Link style={{ color: "#fff" }} to="/">
        Home
      </Link>{" "}
      |{" "}
      <Link style={{ color: "#fff" }} to="/about">
        About
      </Link>
    </header>
  );
}

const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "5px",
};

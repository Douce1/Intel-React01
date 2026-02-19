import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/counter">Counter</NavLink>
      <NavLink to="/UpDown">UpDown</NavLink>
      <NavLink to="/todolist">TodoList</NavLink>
      <a href="http://www.naver.com" target="_blank">
        네이버
      </a>
    </nav>
  );
}

export default Navigation;

import React from "react";

function Nav() {
  return (
    <nav>
      <a href="#">홈</a>
      <a href="#">소개</a>
      <a href="#">연락처</a>
    </nav>
  );
}

function Header() {
  return (
    <header>
      <h1>내 블로그</h1>
      <Nav />
    </header>
  );
}

export default Header;

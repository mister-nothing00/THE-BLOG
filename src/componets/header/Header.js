import React from "react";
import "./Header.css";
import Cover from "./cover.jpg";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img className="headerImage" src={Cover} alt="cover--image" />
    </div>
  );
}

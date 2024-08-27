import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import Avatar from "../navbar/avatar.png";

export default function Navbar() {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
        <i class="topIcon fa-brands fa-square-facebook"></i>
        <i className=" topIcon  fa-solid fa-x"></i>
        <i className="topIcon   fa-brands fa-square-pinterest"></i>
        <i className=" topIcon  fa-brands fa-square-instagram"></i>
      </div>

      <div className="topCenter">
        <ul className="top--list">
          <li className="topListItem">
            <Link to="/" className="link">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/about" className="link">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/" className="link">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/" className="link">
              WRITE
            </Link>
          </li>
          <li className="topListItem">{user && "LOGOUT"}</li>
        </ul>
      </div>

      <div className="topRight">
        {user ? (
          <img src={Avatar} alt="Avatar" className="avatar" />
        ) : (
          <ul className="top--list">
            <li className="topListItem ">
              {" "}
              <Link to="/login" className="link">
                LOGIN
              </Link>
            </li>
            <li className="topListItem ">
              {" "}
              <Link to="/register" className="link">
                REGISTER
              </Link>
            </li>
          </ul>
        )}

        <i class="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}

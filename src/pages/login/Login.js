import React from "react";
import { Link } from "react-router-dom";

import "./login.css";

export default function Login() {
  return (
    <div className="login">
        <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input type="email" className="loginInput" placeholder="E-mail" id="email"></input>

        <label>Password</label>
        <input type="password"  className="loginInput" placeholder="Password" id="password"></input>
       
        <div className="checkbox--container">
          <input type="checkbox" id="checkboxLogin" />
          <label htmlFor="checkboxLogin">Remember me</label>
        </div>

        <button type="submit" className="loginBtn">
          Login
        </button>
      </form>
      <button type="submit" className="loginRegisterBtn">
        <Link to="/register" className="link">Register</Link>
      </button>
    </div>
  );
}

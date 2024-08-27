import React from "react";
import { Link } from "react-router-dom";

import "./register.css";

export default function Register() {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Your username ... "
          id="username"
        />
         <label>Email</label>
        <input
          type="email"
          className="registerInput"
          placeholder="Your email ... "
          id="email"
        />

        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder=" Password"
          id="password"
        />
        <div className="checkbox--container">
          <input type="checkbox" id="checkboxRegister" />
          <label htmlFor="checkboxRegister">Remember me</label>
        </div>
        <button type="submit" className="registerBtn">
          Register
        </button>
      </form>
      <button type="submit" className="registerLoginBtn">
       <Link to="/login" className="link">Login</Link>
      </button>
    </div>
  );
}

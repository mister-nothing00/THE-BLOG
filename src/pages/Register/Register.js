import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./register.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulazione di salvataggio nel localStorage
    const userData = { username, email, password };
    if (rememberMe) {
      localStorage.setItem("user", JSON.stringify(userData));
    } else {
      sessionStorage.setItem("user", JSON.stringify(userData));
    }

    // Naviga alla pagina di login
    navigate("/");
  };

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Your username ..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          type="email"
          className="registerInput"
          placeholder="Your email ..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="checkbox--container">
          <input
            type="checkbox"
            id="checkboxRegister"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />
          <label htmlFor="checkboxRegister">Remember me</label>
        </div>
        <button type="submit" className="registerBtn">
          Register
        </button>
      </form>
      <button className="registerLoginBtn">
        <Link to="/login" className="link">Login</Link>
      </button>
    </div>
  );
}

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./componets/navbar/Navbar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/Register/Register";
import PrivateRoute from "./componets/PrivateRoute";

function App() {
  const user = false; // Simula se l'utente è loggato

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route
          path="/write"
          element={<PrivateRoute component={Write} isAuthenticated={user} />}
        />
        <Route
          path="/settings"
          element={<PrivateRoute component={Settings} isAuthenticated={user} />}
        />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </Router>
  );
}

export default App;

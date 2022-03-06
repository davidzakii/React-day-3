import React from "react";
import { Link,NavLink } from "react-router-dom";
export default function Header() {
    const isActive = {
        backgroundColor: "rgb(112, 128, 144)",
        borderRadius: "5px",
      };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink activeStyle={isActive} className="navbar-brand active" to="/movie/:id" >
          Movies
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink  className="nav-link"   to="/">
              Home
            </NavLink>
            <NavLink activeStyle={isActive} className="nav-link" to="/favorite">
              Favorites
            </NavLink>
            <NavLink activeStyle={isActive} className="nav-link" to="/login">
              Login
            </NavLink>
            <NavLink activeStyle={isActive} className="nav-link" to="/register">Register</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

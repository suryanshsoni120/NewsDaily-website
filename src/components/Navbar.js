import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <div>
      <nav
        className={`navbar fixed-top navbar-expand-lg navbar-dark bg-${theme}`}
      >
        <div className="container-fluid">
          <Link
            className={`navbar-brand text-${
              theme === "light" ? "black" : "white"
            }`}
            to="/"
          >
            NewsDaily
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link active text-${
                    theme === "light" ? "black" : "white"
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link active text-${
                    theme === "light" ? "black" : "white"
                  }`}
                  to="/business"
                >
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link active text-${
                    theme === "light" ? "black" : "white"
                  }`}
                  to="/entertainment"
                >
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link active text-${
                    theme === "light" ? "black" : "white"
                  }`}
                  to="/general"
                >
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link active text-${
                    theme === "light" ? "black" : "white"
                  }`}
                  to="/health"
                >
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link active text-${
                    theme === "light" ? "black" : "white"
                  }`}
                  to="/science"
                >
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link active text-${
                    theme === "light" ? "black" : "white"
                  }`}
                  to="/sports"
                >
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link active text-${
                    theme === "light" ? "black" : "white"
                  }`}
                  to="/technology"
                >
                  Technology
                </Link>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form> */}
          </div>
        </div>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            style={{ cursor: "pointer" }}
            type="checkbox"
            onClick={toggleTheme}
            role="switch"
            id="flexSwitchCheckDefault"
          />
          <label
            className={`form-check-label me-5 text-${
              theme === "light" ? "black" : "white"
            }`}
            htmlFor="flexSwitchCheckDefault"
          >
            {theme === "light" ? "Light" : "Dark"}
          </label>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

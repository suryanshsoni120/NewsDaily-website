import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div>
      <nav
        className={`navbar fixed-top navbar-expand-lg navbar-dark bg-${props.theme}`}
      >
        <div className="container-fluid">
          <Link
            className={`navbar-brand text-${
              props.theme === "light" ? "black" : "white"
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
                    props.theme === "light" ? "black" : "white"
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
                    props.theme === "light" ? "black" : "white"
                  }`}
                  to="/business"
                >
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link active text-${
                    props.theme === "light" ? "black" : "white"
                  }`}
                  to="/entertainment"
                >
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link active text-${
                    props.theme === "light" ? "black" : "white"
                  }`}
                  to="/general"
                >
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link active text-${
                    props.theme === "light" ? "black" : "white"
                  }`}
                  to="/health"
                >
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link active text-${
                    props.theme === "light" ? "black" : "white"
                  }`}
                  to="/science"
                >
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link active text-${
                    props.theme === "light" ? "black" : "white"
                  }`}
                  to="/sports"
                >
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link active text-${
                    props.theme === "light" ? "black" : "white"
                  }`}
                  to="/technology"
                >
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            style={{ cursor: "pointer" }}
            type="checkbox"
            onClick={props.toggleTheme}
            role="switch"
            id="flexSwitchCheckDefault"
          />
          <label
            className={`form-check-label me-5 text-${
              props.theme === "light" ? "black" : "white"
            }`}
            htmlFor="flexSwitchCheckDefault"
          >
            {props.theme === "light" ? "Light" : "Dark"}
          </label>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

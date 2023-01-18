import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark py-2 px-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
          <FaGithub className=" mb-1" /> GithubFinder
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
            <li className="nav-item mx-4">
              <Link to={"/"} className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"/about"}
                className="nav-link active"
                aria-current="page"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

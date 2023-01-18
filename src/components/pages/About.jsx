import React from "react";
import { Link } from "react-router-dom";
import Footer from "../layout/Footer";

export default function About() {
  return (
    <div className="about">
      <div className="aboutContent mx-5 my-5">
        <h2 style={{ fontFamily: "revert-layer" }}>Github Finder</h2>
        <h5>
          This is a react app to find{" "}
          <a
            href="https://github.com/"
            target={"_blank"}
            rel="noreferrer"
            style={{ textDecoration: "none", color: "#b9b9b9" }}
          >
            Github
          </a>{" "}
          profiles and see profile details.{" "}
        </h5>
        <p>
          <span style={{ color: "#b9b9b9" }}>Version</span> : 1.0.0
        </p>
        <p>
          <span style={{ color: "#b9b9b9" }}>Designed By</span> : Prakash Pandey
        </p>
        <Link to={"/"} style={{ color: "#b9b9b9" }}>
          Back to home
        </Link>
      </div>
      <Footer />
    </div>
  );
}

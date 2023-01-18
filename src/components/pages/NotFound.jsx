import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="notFound my-5" style={{textAlign:"center"}}>
      <h1 className="my-1">Opps!</h1>
      <h3>404 - Page not found!</h3>
      <Link to={"/"}>
        <button type="button" className="btn btn-primary my-3">
          <FaHome className="mb-1"/> Back to home
        </button>
      </Link>
    </div>
  );
}

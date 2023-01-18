import React from "react";
import { Link } from "react-router-dom";

export default function UserItems({ user }) {
  return (
    <Link
      to={`/user/${user.login}`}
      style={{
        textDecoration: "none",
        width: "17rem",
        color: "black",
        backgroundColor: "rgb(40 40 40)",
      }}
    >
      <div className="cards mx-2 my-3 d-flex">
        <img src={user.avatar_url} className="card-img-top my-2" alt="..." />
        <div>
          <div
            className="name"
            style={{ color: "white", marginLeft: "1.5vw", marginTop: "1vw" }}
          >
            {user.login.toUpperCase()}
          </div>
          <div
            className="mb-2"
            style={{
              color: "#8a8989",
              marginLeft: "1.8vw",
              marginTop: "0.4vw",
            }}
          >
            Visit profile
          </div>
        </div>
      </div>
    </Link>
  );
}

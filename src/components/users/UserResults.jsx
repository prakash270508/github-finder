import React, { useContext } from "react";
import UserItems from "./UserItems";
import GithubContex from "../../context/github/GithubContext";
import Loader from "../layout/Loader/Loader";
import { Link } from "react-router-dom";

export default function UserResults() {
  const { users, loading } = useContext(GithubContex);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <Link
          to={`${process.env.REACT_APP_GITHUB_API}`}
          style={{ textDecoration: "none" }}
        >
          <div className="row mx-4">
            {users.map((items) => (
              <UserItems key={items.id} user={items} />
            ))}
          </div>
        </Link>
      )}
    </div>
  );
}

import React, { useContext, useState } from "react";
import GithubContex from "../../context/github/GithubContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function UserSearch() {
  const [text, setText] = useState("");

  const { searchUsers } = useContext(GithubContex);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text === "") {
      toast.error("Please enter something", {
        pauseOnHover: false,
        theme: "dark",
        autoClose: 3000
      });
    } else {
      searchUsers(text);
      setText("");
    }
  };

  return (
    <div style={{ color: "white", textAlign: "center" }}>
      <h1 className="front py-4" style={{ fontSize: "6vw" }}>
        Github Finder
      </h1>
      <form
        className="d-flex my-5"
        style={{ width: "40vw", marginLeft: "30vw", color: "white" }}
        role="search"
        onSubmit={handleSubmit}
      >
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={text}
          onChange={handleChange}
        />
        <button className="btn btn-secondary" type="submit">
          Search
        </button>
      </form>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

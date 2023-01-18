import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import GithubContex from "../../context/github/GithubContext";
import {
  FaUsers,
  FaUserFriends,
  FaLocationArrow,
  FaTwitter,
  FaBlog,
  FaCodepen,
  FaGit,
} from "react-icons/fa";
import Loader from "../layout/Loader/Loader";
import RepoLists from "../repos/RepoLists";

export default function User() {
  const { user, getUser, loading, getRepos, repos } = useContext(GithubContex);

  const params = useParams();

  
  useEffect(() => {
    getUser(params.login);
    getRepos(params.login);
  }, []);

  const {
    name,
    avatar_url,
    hireable,
    bio,
    blog,
    company,
    email,
    followers,
    following,
    type,
    public_repos,
    login,
    public_gists,
    location,
    html_url,
    twitter_username,
  } = user;

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <section className="vh-100 user">
          <div className="container  h-100 my-5">
            <div className="row d-flex h-50">
              <div className="col col-md-9 col-lg-7 col-xl-5">
                <div
                  className="card"
                  style={{
                    borderRadius: "15px",
                    backgroundColor: "rgb(40 40 40)",
                  }}
                >
                  <div className="card-body p-4">
                    <div className="d-flex text-black">
                      <div className="flex-shrink-0">
                        <img
                          src={avatar_url}
                          alt="Generic placeholder image"
                          className="img-fluid"
                          style={{ width: "180px", borderRadius: "10px" }}
                        />
                      </div>
                      <div className="flex-grow-1 ms-3 ml-5">
                        <h5 className="mb-1" style={{ color: "white" }}>
                          {name}{" "}
                          <button className="btn btn-outline-success mx-1 btn-sm">
                            {type}
                          </button>
                          <button
                            type="button"
                            className={`btn btn-${
                              hireable ? `success` : `danger`
                            } me-1 flex-grow-1 btn-sm mx-2`}
                          >
                            {hireable ? "Hireable" : "Not hireable"}
                          </button>
                        </h5>
                        <p className="mb-2 pb-1" style={{ color: "white" }}>
                          {login}
                        </p>
                        <p className="mb-2 pb-1" style={{ color: "white" }}>
                          {bio}
                        </p>
                        <div
                          className="d-flex justify-content-start rounded-3 p-2 mb-2 "
                          style={{
                            backgroundColor: "rgb(40 40 40)",
                            color: "white",
                          }}
                        >
                          <div className="px-1">
                            <p className="small mb-1 text-white">
                              <FaUsers className="mb-1 fa" /> Followers
                            </p>
                            <h2 className="mb-0">{followers} </h2>
                          </div>
                          <div className="px-5 ">
                            <p className="small  mb-1 ">
                              <FaUserFriends className="mb-1 fa" /> Following
                            </p>
                            <h2 className="mb-0 ">{following}</h2>
                          </div>
                          <div className="px-5 ">
                            <p className="small  mb-1 ">
                              <FaGit className="mb-1 fa" /> Public gits
                            </p>
                            <h2 className="mb-0 ">{public_gists}</h2>
                          </div>
                          <div className="px-5 ">
                            <p className="small  mb-1 ">
                              <FaCodepen className="mb-1 fa" /> Public repos
                            </p>
                            <h2 className="mb-0 ">{public_repos}</h2>
                          </div>
                        </div>
                        <div className="d-flex pt-1">
                          <a href={html_url} target="_blank">
                            <button
                              type="button"
                              className="btn btn-outline-secondary me-1 flex-grow-1 px-5 text-white"
                            >
                              Go to Github
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mx-3 d-flex my-3">
                    <div className="row">
                      <div className="col cards" style={{ width: "35vw" }}>
                        <div className="px-4">
                          <p className="text-secondary pt-2">
                            <FaLocationArrow className="fa" /> Location
                          </p>
                          <p>{location ? location : "Location Not found"}</p>
                        </div>
                      </div>
                      <div className="col cards ">
                        <div className="px-4">
                          <p className="text-secondary pt-2">
                            <FaBlog className="fa" /> Website
                          </p>
                          <p >{blog ? blog : "No link"}</p>
                        </div>
                      </div>
                      <div className="col cards ">
                        <div className="px-4">
                          <p className="text-secondary pt-2">
                            <FaTwitter className="fa" /> Twitter
                          </p>
                          <p>{twitter_username ? twitter_username : "No url"}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <RepoLists repos={repos}/>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

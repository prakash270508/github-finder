import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContex = createContext();

export const GithubProvider = ({ children }) => {
  const initalState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initalState);

  //Search Users
  const searchUsers = async (text) => {
    setLoading();

    const params = new URLSearchParams({
      q: text,
    });

    const response = await fetch(
      `${process.env.REACT_APP_GITHUB_API}/search/users?${params}`,
      {
        headers: {
          Authorization: `token${process.env.REACT_APP_GITHUB_TOKEN}`,
        },
      }
    );

    const data = await response.json();

    dispatch({
      type: "GET_USERS",
      payload: data.items,
    });
  };

  //Get user
  const getUser = async (login) => {
    setLoading();

    const response = await fetch(
      `${process.env.REACT_APP_GITHUB_API}/users/${login}`,
      {
        headers: {
          Authorization: `token${process.env.REACT_APP_GITHUB_TOKEN}`,
        },
      }
    );

    const data = await response.json();

    dispatch({
      type: "GET_USER",
      payload: data,
    });
  };

  //Get repos
  const getRepos = async (login) => {
    setLoading();

    const params = new URLSearchParams({
      sort: "created",
      per_page: 10,
    });

    const response = await fetch(
      `${process.env.REACT_APP_GITHUB_API}/users/${login}/repos?${params}`,
      {
        headers: {
          Authorization: `token${process.env.REACT_APP_GITHUB_TOKEN}`,
        },
      }
    );

    const data = await response.json();

    dispatch({
      type: "GET_REPOS",
      payload: data,
    });

  };

  const setLoading = () =>
    dispatch({
      type: "SET_LOADING",
    });

  return (
    <GithubContex.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        getUser,
        getRepos,
      }}
    >
      {children}
    </GithubContex.Provider>
  );
};

export default GithubContex;

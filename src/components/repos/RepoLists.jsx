import React from "react";
import RepoItems from "./RepoItems";

export default function RepoLists({ repos }) {
  console.log(repos);

  return (
    <div className="mx-4 my-5">
      <h2 className="mx-3">Latest Repositories</h2>
      {repos.map((items)=> (
        <RepoItems items={items}/>
      ))}
    </div>
  );
}

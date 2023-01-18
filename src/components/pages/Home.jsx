import React from "react";
import UserResults from "../users/UserResults";
import UserSearch from "../users/UserSearch";

export default function Home() {
  return (
    <div className="my-5">
      <UserSearch/>
      <UserResults />
    </div>
  );
}

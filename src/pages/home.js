import React from "react";
import { PostCard } from "../components/postCard";

export const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-2">
          <div className="p-2 m-2 rounded bg-white border">
            side content here
          </div>
        </div>
        <div className="col-7">
          <div
            className="p-2 m-2 bg-white overflow-scroll border"
            style={{ maxHeight: 735 }}
          >
            <PostCard />
            <PostCard />
          </div>
        </div>
        <div className="col-3">
          <div className="p-2 m-2 rounded border">right content here</div>
        </div>
      </div>
    </div>
  );
};

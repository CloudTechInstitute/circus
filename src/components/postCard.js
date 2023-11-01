import React from "react";
import {
  FaBookmark,
  FaCheckCircle,
  FaComment,
  FaHeart,
  FaShare,
} from "react-icons/fa";
import Options from "./optionList";
import image from "..//images/jude.jpeg";

export const PostCard = () => {
  return (
    <>
      <div className="p-2 mb-2">
        <div className="row">
          <div className="col-1">
            <div className="mb-2">
              <div
                className="bg-dark rounded"
                style={{ height: 50, width: 50 }}
              ></div>
            </div>
          </div>
          <div className="col-7">
            <div className="" style={{ textAlign: "left" }}>
              <strong>
                <label>Username Here</label>
              </strong>
              <button className="px-3 mx-2 outline outline-dark rounded-xl">
                Follow
              </button>
              <br></br>
              <small>@username</small>
            </div>
          </div>
          <div className="col-3">
            <div className="p-2 m-1">
              <Options style={{ fontSize: 20 }} />
            </div>
          </div>
          <div className="col-1">
            <div className="p-2 m-1">
              <FaCheckCircle style={{ fontSize: 20, color: "gold" }} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div
              className="mb-1 text-start"
              style={{
                height: 20,
                width: "100%",
                maxHeight: 100,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
        </div>
        <div
          className="mb-2"
          style={{
            height: 300,
            width: "100%",
            maxHeight: 400,
            overflow: "hidden",
          }}
        >
          <img
            src={image}
            alt="img-sample"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        <div className="row m-1">
          <div className="col-3">
            <div className="row">
              <div className="col-6 mt-1">
                <FaHeart />
              </div>
              <div className="col-6">
                <small className="text-start" style={{ marginLeft: -150 }}>
                  100K
                </small>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="row">
              <div className="col-6 mt-1">
                <FaComment />
              </div>
              <div className="col-6">
                <small className="text-start" style={{ marginLeft: -150 }}>
                  100K
                </small>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="row">
              <div className="col-6 mt-1">
                <FaBookmark />
              </div>
              <div className="col-6">
                <small className="text-start" style={{ marginLeft: -150 }}>
                  100K
                </small>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="row">
              <div className="col-6 mt-1">
                <FaShare />
              </div>
              <div className="col-6">
                <small className="text-start" style={{ marginLeft: -150 }}>
                  100K
                </small>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
      </div>
    </>
  );
};

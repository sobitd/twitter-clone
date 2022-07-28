import React from "react";
import { Avatar } from "@mui/material";
import "../App.css";
import {
  ChatBubbleOutline,
  FavoriteBorder,
  Publish,
  Repeat,
  VerifiedUser,
  Delete,
  Update,
} from "@mui/icons-material";

const DispTweets = ({
  avatar,
  text,
  image,
  profileName,
  username,
  verified,
}) => {
  return (
    <div className="display-tweets">
      <div className="user-avatar">
        <Avatar src={avatar} />
      </div>
      <div className="tweet-body">
        <div className="tweet-header">
          <div className="tweet-header-text">
            <h3>
              {profileName}{" "}
              <span className="verified-badge">
                {verified && VerifiedUser} {username}
              </span>
            </h3>
          </div>
          <div className="tweet-body-text">
            <p>{text}</p>
          </div>
        </div>
        <img src={image} alt="" />
        <div className="tweet-footer">
          <ChatBubbleOutline fontSize="small" />
          <Repeat fontSize="small" />
          <FavoriteBorder fontSize="small" />
          <Update fontSize="small" />
          <Delete fontSize="small" />
          <Publish fontSize="small" />
        </div>
      </div>
    </div>
  );
};

export default DispTweets;

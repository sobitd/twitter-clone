import React from "react";
import { Avatar } from "@mui/material";
import "../App.css";
import {
  ChatBubbleOutline,
  Repeat,
  VerifiedUser,
  Delete,
  Update,
  Favorite,
} from "@mui/icons-material";

const DispTweets = ({
  image,
  caption,
  name,
  username,
  time,
  replies,
  retweets,
  likes,
}) => {
  return (
    <div className="display-tweets">
      <div id="user-avatar">
        <Avatar src={image} />
      </div>
      <div id="display-tweets-body">
        <div id="user-id">
          <span id="flex-disp">
            <p id="user-name">{name}</p>
            <p id="username">{username}</p>
            <VerifiedUser />
            <p id="date-posted">{time}</p>
          </span>
          <span id="more-options">
            <Delete fontSize="small" />
            <Update fontSize="small" />
          </span>
        </div>

        <div id="tweet-box">
          <p id="tweet-text">{caption}</p>
        </div>

        <div id="twitter-icons">
          <div id="comments">
            <span className="comment" id="icon">
              <ChatBubbleOutline fontSize="small" />
            </span>
            <p id="replies-text">{replies}</p>
          </div>

          <div id="retweets">
            <span className="retweet" id="icon">
              <Repeat fontSize="small" />
            </span>
            <p id="retweet-text">{retweets}</p>
          </div>

          <div id="likes">
            <span className="like" id="icon">
              <Favorite fontSize="small" />
            </span>
            <p id="like-text">{likes}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DispTweets;

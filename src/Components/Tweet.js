import React from "react";
import { Avatar } from "@mui/material";
import "../App.css";
import VerifiedIcon from "@mui/icons-material/Verified";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineRetweet, AiOutlineEdit } from "react-icons/ai";
import { MdOutlineFavoriteBorder, MdOutlineDelete } from "react-icons/md";


const Tweet = ({
  image,
  name,
  username,
  time,
  caption,
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
            <p id="username">@{username}</p>
            <VerifiedIcon className="verified" /> •
            <p id="date-posted">{time}</p>
          </span>
          <span id="more-options">
            <MdOutlineDelete />
          </span>
        </div>

        <div id="tweet-box">
          <p id="tweet-text">{caption}</p>
        </div>

        <div id="twitter-icons">
          <div id="comments">
            <span className="comment" id="icon">
              <FaRegComment />
            </span>
            <p id="replies-text">{replies}</p>
          </div>

          <div id="retweets">
            <span className="retweet" id="icon">
              <AiOutlineRetweet />
            </span>
            <p id="retweet-text">{retweets}</p>
          </div>

          <div id="likes">
            <span className="like" id="icon">
              <MdOutlineFavoriteBorder />
            </span>
            <p id="like-text">{likes}</p>
          </div>

          <div id="patch">
            <span className="update" id="icon">
            <AiOutlineEdit />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;

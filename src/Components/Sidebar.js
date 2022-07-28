import React from "react";
import "../App.css";
import InsideSidebar from "./InsideSidebar";
import TwitterIcon from "@mui/icons-material/Twitter";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import { BiHomeCircle } from "react-icons/bi";
import { BiHash } from "react-icons/bi";
import { BiBookmark } from "react-icons/bi";
import { IoNotificationsOutline } from "react-icons/io5";

function Sidebar() {
  return (
    <div className="sidebar">
      <div>
        <span id="twitter-icon-wrapper">
          <TwitterIcon className="twitter-icon" />
        </span>

        <button id="row">
          <InsideSidebar Icon={BiHomeCircle} />
          <p id="nav-title">Home</p>
        </button>

        <button id="row">
          <InsideSidebar Icon={BiHash} />
          <p id="nav-title">Explore</p>
        </button>

        <button id="row">
          <InsideSidebar Icon={IoNotificationsOutline} />
          <p id="nav-title">Notifications</p>
        </button>

        <button id="row">
          <InsideSidebar Icon={MailOutlineIcon} />
          <p id="nav-title">Messages</p>
        </button>

        <button id="row">
          <InsideSidebar Icon={BiBookmark} />
          <p id="nav-title">Bookmarks</p>
        </button>

        <button id="row">
          <InsideSidebar Icon={ListAltIcon} />
          <p id="nav-title">Lists</p>
        </button>

        <button id="row">
          <InsideSidebar Icon={PersonOutlineIcon} />
          <p id="nav-title" className="bold">
            Profile
          </p>
        </button>

        <button id="row">
          <InsideSidebar Icon={MoreHorizIcon} />
          <p id="nav-title">More</p>
        </button>
        <button id="tweet">Tweet</button>
      </div>
    </div>
  );
}

export default Sidebar;

import React from "react";
import "../App.css";
import InsideSidebar from "./InsideSidebar";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button } from "@mui/material";

function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon className="twitter-icon"/>
      <InsideSidebar Icon={HomeIcon}  text= "Home"/>
      <InsideSidebar Icon={SearchIcon} text="Explore" />
      <InsideSidebar Icon={NotificationsNoneIcon} text="Notifications" />
      <InsideSidebar Icon={MailOutlineIcon} text="Messages" />
      <InsideSidebar Icon={BookmarkIcon} text="Bookmarks" />
      <InsideSidebar Icon={ListAltIcon} text="Lists" />
      <InsideSidebar Icon={PersonOutlineIcon} text="Profile" />
      <InsideSidebar Icon={MoreHorizIcon} text="More" />

      <Button className="tweet-button" variant="outlined"fullWidth  >
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;

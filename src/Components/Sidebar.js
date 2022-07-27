import React from "react";
import "../App.css";
import InsideSidebar from "./InsideSidebar";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon className="twitter-icon"/>
      <InsideSidebar Icon={HomeIcon} />
      <InsideSidebar Icon={SearchIcon} />
      <InsideSidebar Icon={NotificationsNoneIcon} />
      <InsideSidebar Icon={MailOutlineIcon} />
      <InsideSidebar Icon={PersonOutlineIcon} />
      <InsideSidebar Icon={MoreHorizIcon} />
    </div>
  );
}

export default Sidebar;

import React from "react";
import "./SideBar.css";
import InsideSidebar from "../InsideSidebar/InsideSidebar";
import TwitterIcon from "@mui/icons-material/Twitter";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentitySharpIcon from "@mui/icons-material/PermIdentitySharp";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import { BiHomeCircle } from "react-icons/bi";
import { BiHash } from "react-icons/bi";
import { BiBookmark } from "react-icons/bi";
import { IoNotificationsOutline } from "react-icons/io5";
import { Button } from "@mui/material";

function Sidebar() {
  return (
    <div className="sidebar">
      <InsideSidebar Icon={BiHomeCircle} text="Home" />
      <InsideSidebar Icon={BiHash} text="Explore" />
      <InsideSidebar Icon={IoNotificationsOutline} text="Notifications" />
      <InsideSidebar Icon={MailOutlineIcon} text="Messages" />
      <InsideSidebar Icon={BiBookmark} text="Bookmarks" />
      <InsideSidebar Icon={ListAltIcon} text="Lists" />
      <InsideSidebar Icon={PermIdentitySharpIcon} text="Profile" />
      <InsideSidebar Icon={MoreHorizIcon} text="More" />

      <Button variant="outlined" className="sidebar-tweetButton mobileHidden">
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;

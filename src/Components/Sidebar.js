import React from "react";
import InsideSidebar from "./InsideSidebar";
import TwitterIcon from "@mui/icons-material/Twitter";

function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon className="twitterIcon" />
      <InsideSidebar />
      <InsideSidebar />
    </div>
  );
}

export default Sidebar;

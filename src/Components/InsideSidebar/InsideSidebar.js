import React from "react";
import "./InsideSidebar.css";

function InsideSidebar({ text, Icon }) {
  return (
    <div className="sidebar-link">
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}

export default InsideSidebar;

import React from "react";
import "../App.css";

function InsideSidebar({text, Icon}) {
  return (
    <div className="inside-container">
      <Icon  className="icon"/>
      <h2>{text}</h2>
    </div>
  );
}

export default InsideSidebar;

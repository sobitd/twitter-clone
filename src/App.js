import React from "react";
import "./App.css";
import Sidebar from "./Components/SideBar/Sidebar";
import MainFeedBox from "./Components/MainFeedBox";
import Trends from "./Components/Trends";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <MainFeedBox />
      <Trends />
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import CreateTweet from "./CreateTweet";
import DispTweets from "./DispTweets";
import "../App.css";

const MainFeedBox = () => {
  const [displayTweets, setDisplayTweets] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/Tweets")
      .then((res) => res.json())
      .then((displayTweets) => setDisplayTweets(displayTweets));
  }, []);

  return (
    <div className="feed">
      <div className="feed-header">
        <h2>Home</h2>
        <CreateTweet />
      </div>
      {displayTweets.map((displayTweet) => (
        <DispTweets displayTweets={displayTweet} />
      ))}
    </div>
  );
};
export default MainFeedBox;

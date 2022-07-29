import React, { useState } from "react";
import "../App.css";
import { Avatar, Button } from "@mui/material";

const CreateTweet = (props) => {
  const [newTweet, setNewTweet] = useState({
    caption: "",
  });

  function handleChange(event) {
    setNewTweet(event.target.value);
  }

  function handleCreateTweet(e) {
    e.preventDefault();

    fetch("https://twitter-server-app.herokuapp.com/tweets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        caption: newTweet.caption,
      }),
    });
  }

  return (
    <div className="tweet-container">
      <form onSubmit={handleCreateTweet}>
        {/* compose a new tweet */}
        <div className="create-tweet-box">
          <Avatar src="https://i.pinimg.com/564x/b2/bb/98/b2bb9888eebc1b602ec343441d3e5d8c.jpg" />
          <input
            value={newTweet}
            placeholder="What's happening?"
            type="text"
            onChange={handleChange}
          />
        </div>
        <Button type="submit" className="create-tweet-button">
          Tweet
        </Button>
      </form>
    </div>
  );
};
export default CreateTweet;

import React, { useState } from "react";
import "../App.css";
import { Avatar, Button } from "@mui/material";

const CreateTweet = () => {
  const [newTweet, setNewTweet] = useState({
    tweet: "",
    image_url: "",
  });

  function handleChange(event) {
    setNewTweet({ ...newTweet, [event.target.name]: event.target.value });
  }

  function handleCreateTweet(e) {
    e.preventDefault();

    fetch("http://localhost:8000/Tweets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTweet),
    })
      .then((res) => res.json())
      .then((newTweet) => setNewTweet(newTweet));
  }

  return (
    <div className="tweet-container">
      <form onSubmit={handleCreateTweet}>
        {/* compose a new tweet */}
        <div className="create-tweet-box">
          <Avatar />
          <input
            value={newTweet.tweet}
            placeholder="What's happening?"
            type="text"
            onChange={handleChange}
          />
        </div>
        {/* you can add an image  */}
        <input
          className="tweet-box-image"
          value={newTweet.image_url}
          placeholder="Enter image url"
          type="text"
          onChange={handleChange}
        />
        <Button type="submit" className="create-tweet-button">
          Tweet
        </Button>
      </form>
    </div>
  );
};
export default CreateTweet;

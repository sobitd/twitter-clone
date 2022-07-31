import React, { useState } from "react";
import "../App.css";
import { Avatar, Button } from "@mui/material";

const CreateTweet = ({onAddItem}) => {
  const [caption, setCaption] = useState("");
  const [name, setName] = useState("Kimani");
  const [username, setUsername] = useState("kimani");
  const [image, setImage] = useState(
    "https://i.pinimg.com/564x/b2/bb/98/b2bb9888eebc1b602ec343441d3e5d8c.jpg"
  );
  const [time, setTime] = useState("");

  const timePosted = () => {
    const startTime = Date();
    const currentTime = new Date();
    const timeElapsed = (currentTime - startTime) / 1000;
    return timeElapsed;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = {
      name: name,
      username: username,
      image: image,
      caption: caption,
      time: time,
    };

    fetch("https://twitter-server-app.herokuapp.com/tweets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((r) => r.json())
      .then((newTweet) => onAddItem(newTweet));
  };

  return (
    <div className="tweet-container">
      <form onSubmit={handleSubmit}>
        {/* compose a new tweet */}
        <div className="create-tweet-box">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="hidden"
          />
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="hidden"
          />
          <input
            value={time}
            onChange={(e) => setTime(timePosted())}
            type="hidden"
          />
          <Avatar
            className="avatar"
            src={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <input
            placeholder="What's happening?"
            type="text"
            onChange={(e) => setCaption(e.target.value)}
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

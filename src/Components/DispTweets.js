import React from "react";
import Tweet from "./Tweet";

const DispTweets = ({ displayTweets, setDisplayTweets }) => {
  const handleNewTweet = (newTweet) => {
    setDisplayTweets([...displayTweets, newTweet]);
  };

  return (
    <div>
      {displayTweets.sort().map((tweet) => (
        <Tweet
          onAddItem={handleNewTweet}
          key={tweet.id}
          image={tweet.image}
          name={tweet.name}
          username={tweet.username}
          time={tweet.time}
          caption={tweet.caption}
          replies={tweet.replies}
          retweets={tweet.retweets}
          likes={tweet.likes}
        />
      ))}
    </div>
  );
};

export default DispTweets;

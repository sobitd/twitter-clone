import React from "react";
import CreateTweet from "./CreateTweet";
import Tweet from "./Tweet";

const DispTweets = ({ displayTweets, setDisplayTweets }) => {
  const handleNewTweet = (newTweet) => {
    setDisplayTweets([...displayTweets, newTweet]);
  };

  return (
    <div>
      <CreateTweet onAddItem={handleNewTweet} />
      {displayTweets.sort().map((tweet) => (
        <Tweet
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

import Search from "@mui/icons-material/Search";
import React from "react";
import "../App.css";

// embed real twitter into our twitter clone
import {
  TwitterTimelineEmbed,
  TwitterHashtagButton,
} from "react-twitter-embed";

const Trends = () => {
  return (
    <div className="widgets">
      <div className="search-wrapper">
        <Search className="search" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets-wrapper">
        <h2> What's Happening</h2>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="RailaOdinga"
          options={{ height: 400 }}
        />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="reactjs"
          options={{ height: 400 }}
        />
        <TwitterHashtagButton tag={"reactjs"} />
      </div>
    </div>
  );
};

export default Trends;

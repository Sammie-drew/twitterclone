import React from "react";
import "../css/Widgets.css";
import { TwitterTimelineEmbed, TwitterTweetEmbed } from "react-twitter-embed";
import { Search } from "@material-ui/icons";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widget__input">
        <Search className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's Happening</h2>
        <TwitterTweetEmbed tweetId="1322071419094814720" />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="short_6ft2"
          options={{ height: 400 }}
        />
      </div>
    </div>
  );
}

export default Widgets;

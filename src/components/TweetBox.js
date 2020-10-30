import { Avatar, Button } from "@material-ui/core";
import React, { useState } from "react";
import "../css/TweetBox.css";
import db from "../firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendYarn = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "Mr drew",
      username: "Breeze",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "http://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto-compress&cs-tinysrgb&h-750&w-1260",
    });

    setTweetImage("");
    setTweetMessage("");
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="http://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto-compress&cs-tinysrgb&h-750&w-1260" />
          <input
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
            placeholder="What's happening"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image Url"
          type="text"
        />
        <Button onClick={sendYarn} className="tweetBox__tweetButton">
          Yarn
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;

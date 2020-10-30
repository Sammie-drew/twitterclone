import React, { useEffect, useState } from "react";
import "../css/Feed.css";
import Posts from "./Posts";
import TweetBox from "./TweetBox";
import db from "../firebase";
import FlipMove from "react-flip-move";
function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  console.log("posts :>> ", posts);

  return (
    <div className="feed">
      {/* Header */}
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      {/* Tweet Box */}
      <TweetBox />

      <FlipMove>
        {posts.map((post) => (
          <Posts
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
            verified={post.verified}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;

import React, { useEffect, useState } from "react";
import "../css/Feed.css";
import Post from "./Post";
import Tweetbox from "./TweetBox";
import db from "../firebase";
import FlipMove from 'react-flip-move';

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", 'desc')
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

  return (
    <div className='feed'>
      <div className='feed__header'>
        <h2>Home</h2>
      </div>
      <Tweetbox />

      <FlipMove>
        {posts.map(({ name, username, verified, text, image, avatar, timestamp }) => (
          <Post
            key={text}
            displayName={name}
            userName={username}
            verified={verified}
            timestamp={timestamp}
            text={text}
            image={image}
            avatar={avatar}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;

import React, { useState } from "react";
import "../css/TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import avatar from "../images/avatar.jpg";
import db from "../firebase";
import firebase from 'firebase'

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: "Cristiano",
      username: "cr7",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.independent.co.uk%2Fs3fs-public%2Fthumbnails%2Fimage%2F2018%2F09%2F16%2F15%2Fcristiano-ronaldo.jpg&f=1&nofb=1",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setTweetMessage('')
    setTweetImage('')
  };
  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox__input'>
          <Avatar src={avatar} />
          <input
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
            type='text'
            placeholder="What's happening?"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className='tweetBox__inputImage'
          type='text'
          placeholder='Optional: Enter image URL'
        />
        <Button className='tweetBox__tweetButton' onClick={sendTweet}>
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;

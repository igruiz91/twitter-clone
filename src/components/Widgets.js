import React from "react";
import "../css/Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import { Search } from "@material-ui/icons";

function Widgets() {
  return (
    <div className='widgets'>
      <div className='widgets__input'>
        <Search className='widgets__searchIcon' />
        <input type='text' placeholder='Search Twitter' />
      </div>
      <div className='widgets__container'>
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId='858551177860055040' />
        <TwitterTimelineEmbed
          sourceType='profile'
          screenName='igruiz91'
          options={{ height: 400 }}
        />
        <TwitterShareButton url={"https://www.facebook.com/igruiz91"} 
        options={{text: 'Hi world of twitter', via
        : 'Face Live'}}/>
      </div>
      <h2>Widgets</h2>
    </div>
  );
}

export default Widgets;

import React from "react"
import { Twemoji } from "react-emoji-render"
import SingleTweet from "./single-tweet"
import UserCard from "./user-card"

import * as styles from "./gatsby-tweets.module.css"

function TweetCard({ text, id, user }) {
  return (
    <div className={styles.singleContainer}>
      <SingleTweet key={id} text={text} />
      {user && <UserCard user={user} />}
    </div>
  )
}

export default TweetCard

import React from "react"

import { Twemoji } from "react-emoji-render"
import Linkify from "react-linkify"
import styles from "./single-tweet.module.css"

function SingleTweet({ text, className }) {
  return (
    <article className={`${styles.single} ${className}`}>
      <Linkify>
        <Twemoji text={text} />
      </Linkify>
    </article>
  )
}

export default SingleTweet

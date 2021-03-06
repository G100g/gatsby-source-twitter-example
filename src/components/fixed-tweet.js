import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SingleTweet from "./single-tweet"

import * as styles from "./fixed-tweet.module.css"

function FixedTweet() {
  const {
    twitterStatusesShowSingleTweet: { full_text, id_str },
  } = useStaticQuery(
    graphql`
      query {
        twitterStatusesShowSingleTweet {
          id_str
          full_text
        }
      }
    `
  )

  return (
    <div>
      <h1>Gatsby Fixed Tweet</h1>
      <SingleTweet key={id_str} text={full_text} className={styles.container} />
    </div>
  )
}

export default FixedTweet

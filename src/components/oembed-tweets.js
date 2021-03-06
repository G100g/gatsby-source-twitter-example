import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as styles from "./oembed-tweet.module.css"

function OembedTweet() {
  const {
    twitterStatusesOembedOembed: { html, url, author_url, author_name },
  } = useStaticQuery(
    graphql`
      query {
        twitterStatusesOembedOembed {
          html
          url
          author_url
          author_name
        }
      }
    `
  )

  return (
    <div className={styles.oembedContainer}>
      <h2>
        A tweet from <a href={author_url}>{author_name}</a>
      </h2>
      <div
        className={styles.oembed}
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <a className={styles.seeOnTwitter} href={url}>
        see on Twitter
      </a>
    </div>
  )
}

export default OembedTweet

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import TweetCard from "./tweet-card"

import * as styles from "./gatsby-tweets.module.css"

function GatsbyTweets() {
  const { allTwitterStatusesUserTimelineGatsby: data } = useStaticQuery(
    graphql`
      query {
        allTwitterStatusesUserTimelineGatsby {
          edges {
            node {
              id_str
              full_text
              user {
                screen_name
                name
                profile_image_url_https
                url
              }
            }
          }
        }
      }
    `
  )

  return (
    <div>
      <h1>
        <a href={`https://twitter.com/gatsbyjs`} target="_blank">
          Gatsby Tweets
        </a>
      </h1>

      <div className={styles.container}>
        {data.edges
          .map(({ node }) => node)
          .map(({ full_text, id_str, user }) => (
            <TweetCard key={id_str} text={full_text} id={id_str} />
          ))}
      </div>
    </div>
  )
}

export default GatsbyTweets

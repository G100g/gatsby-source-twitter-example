import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import TweetCard from "./tweet-card"

import styles from "./gatsby-tweets.module.css"

function GatsbyTweets() {
  const { allTwitterSearchTweetsHashtagGatsby: data } = useStaticQuery(
    graphql`
      query {
        allTwitterSearchTweetsHashtagGatsby {
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
        Last tweet from{" "}
        <a
          href={`https://twitter.com/search?f=tweets&vertical=default&q=%23gatsbyjs`}
          target="_blank"
        >
          #gatsby
        </a>
      </h1>

      <div className={styles.container}>
        {data.edges
          .map(({ node }) => node)
          .map(({ full_text, id_str, user }) => (
            <TweetCard text={full_text} id={id_str} user={user} />
          ))}
      </div>
    </div>
  )
}

export default GatsbyTweets

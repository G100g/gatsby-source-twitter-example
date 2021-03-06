import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import TweetCard from "./tweet-card"

import * as styles from "./gatsby-tweets.module.css"

function ListsStatuses() {
  const { allTwitterListsStatusesListsStatuses: data } = useStaticQuery(
    graphql`
      query {
        allTwitterListsStatusesListsStatuses {
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
      <h1>Lists Statuses Example</h1>

      <div className={styles.container}>
        {data.edges
          .map(({ node }) => node)
          .map(({ full_text, id_str, user }) => (
            <TweetCard key={id_str} text={full_text} id={id_str} user={user} />
          ))}
      </div>
    </div>
  )
}

export default ListsStatuses

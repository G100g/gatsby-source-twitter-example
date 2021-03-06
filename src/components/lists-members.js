import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as styles from "./gatsby-tweets.module.css"

import UserCard from "./user-card"

function ListsMembers() {
  const { allTwitterListsMembersListsMember: data } = useStaticQuery(
    graphql`
      query {
        allTwitterListsMembersListsMember {
          edges {
            node {
              name
              screen_name
              description
              location
              profile_image_url_https
              url
            }
          }
        }
      }
    `
  )

  return (
    <div>
      <h1>Lists Members Example</h1>

      <div className={styles.container}>
        {data.edges
          .map(({ node }) => node)
          .map((user) => (
            <div key={user.screen_name} className={styles.singleContainer}>
              <UserCard user={user} />

              <p>{user.description}</p>
              {user.location && (
                <strong className={styles.userLocation}>
                  from {user.location}
                </strong>
              )}
            </div>
          ))}
      </div>
    </div>
  )
}

export default ListsMembers

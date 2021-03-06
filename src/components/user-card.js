import React from "react"
import { Twemoji } from "react-emoji-render"

import * as styles from "./gatsby-tweets.module.css"

function UserCard({ user }) {
  return (
    <div className={styles.author}>
      <img
        className={styles.img}
        src={user.profile_image_url_https}
        alt={`Thumbnail for ${user.name}`}
      />

      <div className={styles.linkContainer}>
        <a href={user.url}>
          <Twemoji text={user.name} />{" "}
        </a>
        <a
          href={`https://twitter.com/${user.screen_name}`}
          className={styles.link}
        >
          <strong>{user.screen_name}</strong>
        </a>
      </div>
    </div>
  )
}

export default UserCard

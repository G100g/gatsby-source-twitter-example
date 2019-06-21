import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import GatsbyTweets from "../components/gatsby-tweets"
import GatsbyHashtagTweets from "../components/gatsby-hashtag-tweets"
import FixedTweet from "../components/fixed-tweet"
import OembedTweet from "../components/oembed-tweets"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <FixedTweet />
    <GatsbyTweets />
    <GatsbyHashtagTweets />
    <OembedTweet />

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage

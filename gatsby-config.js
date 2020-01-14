require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Twitter Source Demo`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@g100g`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-twitter`,
      options: {
        credentials: {
          consumer_key: process.env.TWITTER_CONSUMER_KEY,
          consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
          bearer_token: process.env.TWITTER_BEARER_TOKEN,
        },
        queries: {
          gatsby: {
            endpoint: "statuses/user_timeline",
            params: {
              screen_name: "gatsbyjs",
              // count: 10,
              include_rts: false,
              exclude_replies: true,
              tweet_mode: "extended",
            },
          },
          hashtagGatsby: {
            endpoint: "search/tweets",
            params: {
              q: "#gatsbyjs",
              tweet_mode: "extended",
            },
          },
          singleTweet: {
            endpoint: "statuses/show",
            params: {
              id: "1041804966598299648",
              tweet_mode: "extended",
            },
          },
          oembed: {
            endpoint: "statuses/oembed",
            params: {
              url: "https://twitter.com/kylemathews/status/1141289550452592640",
            },
          },
          listsMember: {
            endpoint: "lists/members",
            params: {
              slug: "games-to-follow",
              owner_screen_name: "g100g",
            },
          },
          listsStatuses: {
            endpoint: "lists/statuses",
            params: {
              slug: "games-to-follow",
              owner_screen_name: "g100g",
              tweet_mode: "extended",
            },
          },
        },
      },
    },
  ],
}

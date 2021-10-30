const path = require(`path`)
require(`dotenv`).config({ path: `.env` })

module.exports = {
  siteMetadata: {
    title: `Jitendra Nirnejak - Portfolio`,
    description: `Portfolio website of Jitendra Nirnejak, Developer and Designer, I am passionate about elegant user interfaces, typography, and design systems. Working with React, Vue, GraphQL and TypeScript.`,
    author: `Jitendra Nirnejak`,

    siteLanguage: `en`,
    siteUrl: `https://nirnejak.com/`,
    siteImage: `https://nirnejak.com/sitecover.png`,

    social: {
      github: `nirnejak`,
      codepen: `nirnejak`,
      dribbble: `nirnejak`,
      behance: `nirnejak`,
      linkedin: `nirnejak`,
      twitter: `jeetnirnejak`,
    },
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-purgecss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.resolve(`./src`),
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: "GITHUB",
        fieldName: "github",
        url: `https://api.github.com/graphql`,
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`,
        },
        fetchOptions: {},
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jitendra Nirnejak`,
        short_name: `nirnejak`,
        start_url: `/`,
        background_color: `#1e1e20`,
        theme_color: `#1e1e20`,
        display: `fullscreen`,
        icon: `src/images/logo.png`,
      },
    },
  ],
}

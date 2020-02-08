require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: 'Jitendra Nirnejak - Portfolio',
    siteTitle: 'Jitendra Nirnejak - Portfolio',
    description: 'Portfolio website of Jitendra Nirnejak, a Full-stack developer and UI/UX Designer',
    author: '@nirnejak',
    twitterUser: 'jeetnirnejak',

    siteUrl: 'https://nirnejak.com',
    siteLanguage: 'en',

    siteImage: 'https://nirnejak.com/static/jitendra.png',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Jitendra Nirnejak',
        short_name: 'nirnejak',
        start_url: '/',
        background_color: '#027BFF',
        theme_color: '#027BFF',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#027BFF',
        showSpinner: false,
      },
    },
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
  ],
}

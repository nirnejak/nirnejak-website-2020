module.exports = {
  siteMetadata: {
    title: 'Jitendra Nirnejak - Portfolio',
    description: 'Portfolio website of Jitendra Nirnejak, a Full-stack developer and UI/UX Designer',
    author: '@nirnejak',
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
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
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
    'gatsby-plugin-sass',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}

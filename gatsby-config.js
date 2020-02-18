require(`dotenv`).config({ path: `.env` })

module.exports = {
  siteMetadata: {
    title: 'Jitendra Nirnejak - Portfolio',
    description: 'Portfolio website of Jitendra Nirnejak, a Full-stack developer and UI/UX Designer',
    author: '@nirnejak',

    social: {
      github: 'nirnejak',
      codepen: 'nirnejak',
      dribbble: 'nirnejak',
      behance: 'nirnejak',
      linkedin: 'nirnejak',
      twitter: 'jeetnirnejak',
    },

    siteLanguage: 'en',
    siteUrl: 'https://nirnejak.com',
    siteImage: 'https://nirnejak.com/static/jitendra.png',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxwidth: 900
            }
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            }
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
        ]
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/content`,
        name: 'pages',
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
    // {
    //   resolve: 'gatsby-plugin-google-fonts',
    //   options: {
    //     fonts: [
    //       'Abril Fatface',
    //     ],
    //     display: 'swap'
    //   }
    // },

    // 'gatsby-plugin-feed',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
  ],
}

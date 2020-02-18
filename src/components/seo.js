/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

require(`dotenv`).config({ path: `.env` })

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            social
            siteLanguage
            siteUrl
            siteImage
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: 'keywords',
          content: 'Jitendra, Nirnejak, Portfolio, Web, Developer, Designer, React, Vue, Gatsby, Node, Adobe XD, Figma'
        },
        {
          name: 'author',
          content: site.siteMetadata.author
        },
        {
          name: 'robots',
          content: 'follow'
        },
        {
          name: 'image',
          content: site.siteMetadata.siteImage
        },
        {
          name: `description`,
          content: metaDescription,
        },
        // Schema.org for Google
        {
          itemprop: 'name',
          content: site.siteMetadata.title
        },
        {
          itemprop: 'description',
          content: metaDescription
        },
        {
          itemprop: 'description',
          content: site.siteMetadata.siteImage
        },
        // Open Graph
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: site.siteMetadata.siteImage,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        // Facebook
        {
          name: 'fb:admins',
          content: process.env.FB_ADMINS_ID
        },
        {
          name: 'fb:app_id',
          content: process.env.FB_APP_ID
        },
        // Twitter
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:site`,
          content: site.siteMetadata.social.twitter,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.social.twitter,
        },
        {
          name: `twitter:image:src`,
          content: site.siteMetadata.siteImage
        },
      ].concat(meta)}
    >
      <script
        defer
        src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
        crossorigin="anonymous"
      />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO

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

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteLanguage
            siteUrl
            siteImage
            social {
              twitter
            }
            facebook_app {
              fb_admin_id
              fb_app_id
            }
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
          content: 'Jitendra, Nirnejak, Portfolio, Developer, Designer, Blogger, React, Vue, Gatsby, Node, Adobe XD, Figma'
        },
        {
          name: 'author',
          content: site.siteMetadata.author
        },
        {
          name: 'robots',
          content: 'follow'   // 'follow', 'index'?
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
          property: `og:url`,
          content: site.siteMetadata.siteUrl,
        },
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
          content: site.siteMetadata.facebook_app.fb_admin_id
        },
        {
          name: 'fb:app_id',
          content: site.siteMetadata.facebook_app.fb_app_id
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

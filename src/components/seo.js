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
          name: "keywords",
          content:
            "Jitendra, Nirnejak, Portfolio, Developer, Designer, Blogger, React, Vue, Gatsby, Node, Adobe XD, Figma",
        },
        {
          name: "author",
          content: site.siteMetadata.author,
        },
        {
          name: "robots",
          content: "follow", // 'follow', 'index'?
        },
        {
          name: "image",
          content: site.siteMetadata.siteImage,
        },
        {
          name: `description`,
          content: metaDescription,
        },
        // Schema.org for Google
        {
          itemprop: "name",
          content: site.siteMetadata.title,
        },
        {
          itemprop: "description",
          content: metaDescription,
        },
        {
          itemprop: "description",
          content: site.siteMetadata.siteImage,
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
          property: "fb:admins",
          content: "100003147340678",
        },
        {
          property: "fb:app_id",
          content: "303711933555596",
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
          content: site.siteMetadata.siteImage,
        },
      ].concat(meta)}
    />
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

import React, { FC, ReactElement } from "react"
import Helmet from "react-helmet"

import { useStaticQuery, graphql } from "gatsby"

import PropTypes from "prop-types"

type SEOProps = {
  description?: string
  lang?: string
  meta?: string
  title: string
}

const SEO: FC<SEOProps> = ({
  description,
  lang,
  meta,
  title,
}): ReactElement => {
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

  const metaTitle = title || site.siteMetadata.title
  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      titleTemplate={metaTitle}
      meta={[
        {
          content:
            "Jitendra, Nirnejak, Portfolio, Developer, Designer, Blogger, React, Vue, Gatsby, Node, Adobe XD, Figma",
          name: "keywords",
        },
        {
          content: site.siteMetadata.author,
          name: "author",
        },
        {
          content: "follow", // 'follow', 'index'?
          name: "robots",
        },
        {
          content: site.siteMetadata.siteImage,
          name: "image",
        },
        {
          content: metaDescription,
          name: `description`,
        },
        // Schema.org for Google
        {
          content: "Jitendra Nirnejak",
          itemprop: "name",
        },
        {
          content: metaDescription,
          itemprop: "description",
        },
        {
          content: site.siteMetadata.siteImage,
          itemprop: "description",
        },
        // Open Graph
        {
          content: site.siteMetadata.siteUrl,
          property: `og:url`,
        },
        {
          content: metaTitle,
          property: `og:title`,
        },
        {
          content: metaDescription,
          property: `og:description`,
        },
        {
          content: site.siteMetadata.siteImage,
          property: `og:image`,
        },
        {
          content: `website`,
          property: `og:type`,
        },
        // Facebook
        {
          content: "100003147340678",
          property: "fb:admins",
        },
        {
          content: "303711933555596",
          property: "fb:app_id",
        },
        // Twitter
        {
          content: `summary`,
          name: `twitter:card`,
        },
        {
          content: metaTitle,
          name: `twitter:title`,
        },
        {
          content: metaDescription,
          name: `twitter:description`,
        },
        {
          content: site.siteMetadata.social.twitter,
          name: `twitter:site`,
        },
        {
          content: site.siteMetadata.social.twitter,
          name: `twitter:creator`,
        },
        {
          content: site.siteMetadata.siteImage,
          name: `twitter:image:src`,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  description: ``,
  lang: `en`,
  meta: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO

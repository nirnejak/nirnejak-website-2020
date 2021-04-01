import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const GatsbyPluginsBlogImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "blogs/gatsby_plugins.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 400
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `)

  return (
    <GatsbyImage
      image={data.placeholderImage.childImageSharp.gatsbyImageData}
      style={{ borderRadius: 7 }}
      alt="Gatsby Plugins"
    />
  )
}

export default GatsbyPluginsBlogImage

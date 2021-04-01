import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const JSDocBlogImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "blogs/jsdoc_for_react.png" }
      ) {
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
      alt="JSDoc for React"
    />
  )
}

export default JSDocBlogImage

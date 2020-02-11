import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <nav className="navbar">
      <div className="container">
        <h2>{data.site.siteMetadata.title}</h2>
      </div>
    </nav>
  )
}

Header.propTypes = {
  isExpanded: PropTypes.bool.isRequired
}

Header.defaultProps = {}

export default Header

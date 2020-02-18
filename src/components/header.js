import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import "./header.scss"

const Header = () => {
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
        <Link to="/" className="navbar-link">
          <span className="is-raised" style={{ marginRight: 10, padding: 10, borderRadius: "50%" }}>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-left" class="svg-inline--fa fa-arrow-left fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path></svg>
          </span>
          Home
        </Link>
      </div>
    </nav>
  )
}

Header.propTypes = {
  isExpanded: PropTypes.bool.isRequired
}

Header.defaultProps = {}

export default Header

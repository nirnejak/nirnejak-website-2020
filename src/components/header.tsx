import * as React from "react"

import { Link } from "gatsby"

import "./header.scss"

const Header: React.FC = () => (
  <nav className="navbar">
    <div className="container">
      <Link to="/" className="navbar-link">
        Home
      </Link>
      <Link to="/blogs" className="navbar-link">
        Blogs
      </Link>
      <a
        href="https://github.com/nirnejak"
        className="navbar-link"
        rel="noreferrer"
        target="_blank"
      >
        Projects
      </a>
      <Link to="/contact" className="navbar-link">
        Contact
      </Link>
    </div>
  </nav>
)

export default Header

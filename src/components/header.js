import React from "react"
import { Link } from "gatsby"

import "./header.scss"

const Header = () => (
  <nav className="navbar">
    <div className="container">
      <Link to="/" className="navbar-link">
        Home
      </Link>
      <Link to="/blogs" className="navbar-link">
        Blogs
      </Link>
      <Link to="/projects" className="navbar-link">
        Projects
      </Link>
      <Link to="/contact" className="navbar-link">
        Contact
      </Link>
    </div>
  </nav>
)

export default Header

import React, { FC, ReactElement } from "react"

import { Link } from "gatsby"

import "./header.scss"

const Header: FC = (): ReactElement => (
  <nav className="navbar">
    <div className="container">
      <Link to="/" className="navbar-link">
        Home
      </Link>
      <Link to="/blogs" className="navbar-link">
        Blogs
      </Link>
      <a href="https://github.com/nirnejak" className="navbar-link">
        Projects
      </a>
      <Link to="/contact" className="navbar-link">
        Contact
      </Link>
    </div>
  </nav>
)

export default Header

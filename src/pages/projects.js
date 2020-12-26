import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"
import SEO from "../components/seo"

const Projects = () => (
  <>
    <SEO title="Projects" />
    <Header />
    <div className="hero is-fullheight">
      <div className="hero-body">
        <div className="container">
          <h1 className="is-size-1 has-text-black">Projects</h1>
          <br />
          <p className="is-size-3 has-text-weight-light">
            Things I&apos;ve built
          </p>
          <br />
          <br />
          <Link to="/">Go back to the homepage</Link>
        </div>
      </div>
    </div>
  </>
)

export default Projects

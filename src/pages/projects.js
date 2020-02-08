import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"
import SEO from "../components/seo"

const Projects = () => (
  <>
    <SEO title="Projects" />
    <Header />
    <h1>Projects</h1>
    <p>Welcome to projects page</p>
    <Link to="/">Go back to the homepage</Link>
  </>
)

export default Projects

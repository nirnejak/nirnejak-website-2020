import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"
import SEO from "../components/seo"

const Blogs = () => (
  <>
    <SEO title="Blogs" />
    <Header />
    <h1>Hi from the blogs page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </>
)

export default Blogs
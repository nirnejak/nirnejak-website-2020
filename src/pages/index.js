import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

import './main.scss'

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="has-text-black">Hi</h1>
          <h1 className="has-text-black">I'm Jitendra Nirnejak</h1>
          <br />
          <p className="has-text-weight-light">UI/UX Designer, Full-Stack Developer, Tech Blogger</p>
          <br />
          <svg width="64" height="5" viewBox="0 0 64 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="64" height="5" fill="#027BFF" />
          </svg>
          <br />
          <br />
          <br />
          <br />

          <div className="icons-container">
            <div className="icon-container">
              <i className="fab fa-2x fa-instagram" />
            </div>
            <div className="icon-container">
              <i className="fab fa-2x fa-facebook" />
            </div>
            <div className="icon-container">
              <i className="fab fa-2x fa-linkedin" />
            </div>
            <div className="icon-container">
              <i className="fab fa-2x fa-github" />
            </div>
            <div className="icon-container">
              <i className="fab fa-2x fa-dribbble" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
)

export default IndexPage

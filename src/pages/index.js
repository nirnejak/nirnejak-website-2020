import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

import './main.scss'

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container">
          <h1 className="is-size-1 has-text-black">Hi, <br />I'm Jitendra Nirnejak</h1>
          <br />
          <p className="is-size-3 has-text-weight-light">UI/UX Designer, Full-Stack Developer, Tech Blogger</p>
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
              <a href="https://github.com/nirnejak/" target="_blank">
                <i className="fab fa-2x fa-github" />
              </a>
            </div>
            <div className="icon-container">
              <a href="https://codepen.io/nirnejak" target="_blank">
                <i className="fab fa-2x fa-codepen" />
              </a>
            </div>
            <div className="icon-container">
              <a href="https://www.dribbble.com/nirnejak/" target="_blank">
                <i className="fab fa-2x fa-dribbble" />
              </a>
            </div>
            <div className="icon-container">
              <a href="https://www.behance.net/nirnejak" target="_blank">
                <i className="fab fa-2x fa-behance-square" />
              </a>
            </div>
            <div className="icon-container">
              <a href="https://www.linkedin.com/in/nirnejak/" target="_blank">
                <i className="fab fa-2x fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-foot has-text-centered">
        <i className="fas fa-angle-double-down" />
        <br />
        <br />
      </div>
    </section>
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <h2 className="is-huge">Blogs</h2>

        </div>
      </div>
    </section>
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <h2 className="is-huge">Skills</h2>
        </div>
      </div>
    </section>
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <h2 className="is-huge">Work</h2>
        </div>
      </div>
    </section>
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <h2 className="is-huge">Contact</h2>
          <p className="is-size-2 has-text-right has-text-black has-text-weight-light">7869290297</p>
          <p className="is-size-2 has-text-right has-text-black has-text-weight-light">jeetnirnejak@gmail.com</p>
        </div>
      </div>
    </section>
  </>
)

export default IndexPage

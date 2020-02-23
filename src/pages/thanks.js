import React from "react"

import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"

import './main.scss'

const IndexPage = () => (
  <>
    <SEO title="Uses" />
    <section className="hero is-fullheight">
      <div className="hero-head">
        <Header />
      </div>
      <div className="hero-body">
        <div className="container">
          <h1 className="is-size-1 has-text-black">Thank You.</h1>
          <br />
          <p className="is-size-3 has-text-weight-light">Thank you for your submission, I'll get back to you as soon as possible.</p>

          <div style={{ margin: "30 0px" }}>
            <svg width="64" height="5" viewBox="0 0 64 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="64" height="5" fill="#027BFF" />
            </svg>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </>
)

export default IndexPage

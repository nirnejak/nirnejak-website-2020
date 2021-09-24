import * as React from "react"

import Footer from "../components/footer"
import Header from "../components/header"
import SEO from "../components/seo"

const IndexPage: React.FC = () => (
  <>
    <SEO title="Thank You for Submission" />
    <section className="hero is-fullheight">
      <div className="hero-head">
        <Header />
      </div>
      <div className="hero-body">
        <div className="container">
          <h1 className="is-size-1 has-text-black">Thank You.</h1>
          <br />
          <p className="is-size-3 has-text-weight-light">
            Thank you for your submission, I&apos;ll get back to you as soon as
            possible.
          </p>

          <div style={{ margin: "30 0px" }}>
            <svg
              width="64"
              height="5"
              viewBox="0 0 64 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
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

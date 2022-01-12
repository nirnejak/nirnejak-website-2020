import * as React from "react"

import SEO from "../components/seo"

const IndexPage: React.FC = () => (
  <>
    <SEO title="Thank You for Submission" />
    <section className="hero is-fullheight-with-navbar">
      <div className="hero-body">
        <div className="container">
          <h1 className="text-7xl text-white">Thank You.</h1>
          <br />
          <p className="text-3xl text-gray-500 mb-28">
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
  </>
)

export default IndexPage

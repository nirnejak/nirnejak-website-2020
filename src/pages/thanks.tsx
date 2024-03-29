import * as React from "react"

import SEO from "../components/seo"

export const Head: React.FC = () => {
  return <SEO title="Thank You for Submission" />
}

const ThanksPage: React.FC = () => (
  <section className="hero is-medium">
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
)

export default ThanksPage

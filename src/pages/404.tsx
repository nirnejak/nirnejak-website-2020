import * as React from "react"

import { Link } from "gatsby"

import { motion } from "framer-motion"

import SEO from "../components/seo"

export const Head: React.FC = () => {
  return <SEO title="404: Not found" />
}

const NotFoundPage: React.FC = () => (
  <div className="hero" style={{ marginTop: 150 }}>
    <div className="hero-body">
      <motion.div
        initial={{ opacity: 0, translateY: 10 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="container"
      >
        <h1 className="is-size-1 has-text-black">NOT FOUND</h1>
        <br />
        <p className="is-size-3 has-text-weight-light">
          You just hit a route that doesn&#39;t exist... the sadness.
        </p>
        <br />
        <br />
        <br />
        <br />
        <Link to="/" className="link">
          <span style={{ marginRight: 10 }}>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="arrow-left"
              className="svg-inline--fa fa-arrow-left fa-w-14"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"
              />
            </svg>
          </span>
          Go back to home
        </Link>
      </motion.div>
    </div>
  </div>
)

export default NotFoundPage

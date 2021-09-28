import * as React from "react"

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Fade from "react-reveal/Fade"

const RecentBlogs: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <h2 className="is-huge">Blogs</h2>
          <div className="image-contents-container">
            <Fade>
              <div className="image-content-container">
                <a
                  href="https://www.inkoop.io/blog/gatsby-3-image-a-deep-dive-into-the-new-image-api-features/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <StaticImage
                    src="../../images/blogs/gatsby_3_image.png"
                    alt="Gatsby v3 Image API"
                    placeholder="blurred"
                    width={400}
                    style={{ borderRadius: 7, marginBottom: 13 }}
                  />
                  <p className="has-text-black has-text-weight-bold">
                    Gatsby 3 Image - A Deep-dive into the new image API features
                  </p>
                </a>
              </div>
            </Fade>
            <Fade>
              <div className="image-content-container">
                <a
                  href="https://www.inkoop.io/blog/setup-eslint-for-react-with-prettier-pre-commit-and-vscode/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <StaticImage
                    src="../../images/blogs/gatsby_shopify.png"
                    alt="Gatsby and Shopify"
                    placeholder="blurred"
                    width={400}
                    style={{ borderRadius: 7, marginBottom: 13 }}
                  />
                  <p className="has-text-black has-text-weight-bold">
                    How to integrate Gatsby with Shopify Store
                  </p>
                </a>
              </div>
            </Fade>
            <Fade>
              <div className="image-content-container">
                <a
                  href="https://www.inkoop.io/blog/setup-eslint-for-react-with-prettier-pre-commit-and-vscode/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <StaticImage
                    src="../../images/blogs/eslint.png"
                    alt="ESLint, Prettier and VSCode"
                    placeholder="blurred"
                    width={400}
                    style={{ borderRadius: 7, marginBottom: 13 }}
                  />
                  <p className="has-text-black has-text-weight-bold">
                    Setup ESLint for React with Prettier, pre-commit and VSCode
                  </p>
                </a>
              </div>
            </Fade>
          </div>
          <div style={{ margin: 50 }} className="has-text-centered">
            <Link to="/blogs/" className="link" style={{ marginRight: 0 }}>
              See All Blogs
            </Link>
            <br />
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
}

export default RecentBlogs

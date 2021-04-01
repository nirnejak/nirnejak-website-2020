import React from "react"
import { Link } from "gatsby"
import Fade from "react-reveal/Fade"
import { StaticImage } from "gatsby-plugin-image"

const RecentBlogs = () => {
  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <h2 className="is-huge">Blogs</h2>
          <br />
          <br />
          <div className="image-contents-container">
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
                    style={{ borderRadius: 7 }}
                  />
                  <br />
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
                    style={{ borderRadius: 7 }}
                  />
                  <br />
                  <p className="has-text-black has-text-weight-bold">
                    Setup ESLint for React with Prettier, pre-commit and VSCode
                  </p>
                </a>
              </div>
            </Fade>
            <Fade>
              <div className="image-content-container">
                <a
                  href="https://www.inkoop.io/blog/how-to-ensure-great-user-experience-on-forms/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <StaticImage
                    src="../../images/blogs/form_blog.png"
                    alt="Form"
                    placeholder="blurred"
                    width={400}
                    style={{ borderRadius: 7 }}
                  />
                  <br />
                  <p className="has-text-black has-text-weight-bold">
                    Forms that don&apos;t suck | How to ensure great user
                    experience on forms
                  </p>
                </a>
              </div>
            </Fade>
          </div>
          <div style={{ margin: 50 }} className="has-text-centered">
            <Link to="/blogs" className="link" style={{ marginRight: 0 }}>
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

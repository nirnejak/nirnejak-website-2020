import * as React from "react"
import { useInView } from "react-intersection-observer"

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { motion, useAnimation } from "framer-motion"

const RecentBlogs: React.FC = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  React.useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <section className="hero" ref={ref}>
      <div className="hero-body">
        <div className="container">
          <h2 className="is-huge">Blogs</h2>
          <div className="image-contents-container">
            <motion.div
              animate={controls}
              initial="hidden"
              transition={{ delay: 0.5, duration: 0.3 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
              className="image-content-container"
            >
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
            </motion.div>
            <motion.div
              animate={controls}
              initial="hidden"
              transition={{ delay: 0.5, duration: 0.3 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
              className="image-content-container"
            >
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
            </motion.div>
            <motion.div
              animate={controls}
              initial="hidden"
              transition={{ delay: 0.5, duration: 0.3 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
              className="image-content-container"
            >
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
            </motion.div>
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

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

  const variants = {
    visible: { opacity: 1, translateY: -5 },
    hidden: { opacity: 0, translateY: 0 },
  }

  return (
    <section className="mt-24">
      <div className="container">
        <h2 className="text-9xl text-gray-500 pb-10 font-bold">Blogs</h2>
        <div className="grid grid-cols-3 gap-5" ref={ref}>
          <motion.div
            animate={controls}
            initial="hidden"
            transition={{ delay: 0, duration: 0.3 }}
            variants={variants}
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
                className="rounded-md mb-5"
              />
              <p className="text-white font-bold">
                Gatsby 3 Image - A Deep-dive into the new image API features
              </p>
            </a>
          </motion.div>
          <motion.div
            animate={controls}
            initial="hidden"
            transition={{ delay: 0.1, duration: 0.3 }}
            variants={variants}
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
                className="rounded-md mb-5"
              />
              <p className="text-white font-bold">
                How to integrate Gatsby with Shopify Store
              </p>
            </a>
          </motion.div>
          <motion.div
            animate={controls}
            initial="hidden"
            transition={{ delay: 0.2, duration: 0.3 }}
            variants={variants}
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
                className="rounded-md mb-5"
              />
              <p className="text-white font-bold">
                Setup ESLint for React with Prettier, pre-commit and VSCode
              </p>
            </a>
          </motion.div>
        </div>
        <div className="text-center m-12">
          <Link to="/blogs/" className="text-white font-bold">
            See All Blogs
          </Link>
          <div className="flex justify-center mt-3">
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

import * as React from "react"
import { useInView } from "react-intersection-observer"

import { StaticImage } from "gatsby-plugin-image"

import { motion, useAnimation } from "framer-motion"

const RecentWork: React.FC = () => {
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
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <h2 className="is-huge">Work</h2>
          <div className="image-contents-container" ref={ref}>
            <motion.div
              animate={controls}
              initial="hidden"
              transition={{ delay: 0, duration: 0.3 }}
              variants={variants}
              className="image-content-container"
            >
              <a
                href="http://gitpro.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StaticImage
                  src="../../images/works/gitpro.jpeg"
                  alt="GitPro Screenshot"
                  placeholder="blurred"
                  width={400}
                  style={{ borderRadius: 7, marginBottom: 13 }}
                />
                <br />
                <p className="has-text-black has-text-weight-bold">GitPro</p>
                <p
                  className="has-text-weight-light"
                  style={{ marginBottom: 5 }}
                >
                  A platform to make repository management and developer
                  activity tracking easier.
                </p>
              </a>
            </motion.div>
            <motion.div
              animate={controls}
              initial="hidden"
              transition={{ delay: 0.1, duration: 0.3 }}
              variants={variants}
              className="image-content-container"
            >
              <a
                href="https://dribbble.com/shots/4645605-TellMe-UI-Dashboard/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StaticImage
                  src="../../images/works/tellme.png"
                  alt="TellMe App Screenshot"
                  placeholder="blurred"
                  width={400}
                  style={{ borderRadius: 7, marginBottom: 13 }}
                />
                <br />
                <p className="has-text-black has-text-weight-bold">TellMe</p>
                <p
                  className="has-text-weight-light"
                  style={{ marginBottom: 5 }}
                >
                  Application to collect and analyse irrigation data to reduce
                  water wastage.
                </p>
              </a>
            </motion.div>
            <motion.div
              animate={controls}
              initial="hidden"
              transition={{ delay: 0.2, duration: 0.3 }}
              variants={variants}
              className="image-content-container"
            >
              <a
                href="https://github.com/nirnejak/swift-tab-app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StaticImage
                  src="../../images/works/swiftui.png"
                  alt="SwiftUI App"
                  placeholder="blurred"
                  width={400}
                  style={{ borderRadius: 7, marginBottom: 13 }}
                />
                <br />
                <p className="has-text-black has-text-weight-bold">
                  SwiftUI Tab App
                </p>
                <p
                  className="has-text-weight-light"
                  style={{ marginBottom: 5 }}
                >
                  A SwiftUI app for iOS for Task Management.
                </p>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RecentWork

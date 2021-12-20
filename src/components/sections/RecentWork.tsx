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
          <h2 className="text-9xl pb-10 font-bold">Work</h2>
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
                  src="../../images/works/draxlr.png"
                  alt="Draxlr Cover"
                  placeholder="blurred"
                  width={400}
                  style={{ borderRadius: 7, marginBottom: 13 }}
                />
                <br />
                <p className="text-white font-bold">Draxlr</p>
                <p className="font-light" style={{ marginBottom: 5 }}>
                  A Platform to analyze and monitor your SQL Databases.
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
                <p className="text-white font-bold">GitPro</p>
                <p className="font-light" style={{ marginBottom: 5 }}>
                  A platform to make repository management and developer
                  activity tracking easier.
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
                <p className="text-white font-bold">TellMe</p>
                <p className="font-light" style={{ marginBottom: 5 }}>
                  Application to collect and analyse irrigation data to reduce
                  water wastage.
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

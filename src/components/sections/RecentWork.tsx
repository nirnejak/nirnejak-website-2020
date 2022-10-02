import * as React from "react"
import { useInView } from "react-intersection-observer"

import { StaticImage } from "gatsby-plugin-image"

import { motion, useAnimation } from "framer-motion"

import Card from "../atoms/Card"
import Grid from "../atoms/Grid"

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
          <div ref={ref}>
            <Grid>
              <Card>
                <motion.div
                  animate={controls}
                  initial="hidden"
                  transition={{ delay: 0, duration: 0.3 }}
                  variants={variants}
                >
                  <a
                    href="https://draxlr.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <StaticImage
                      src="../../images/works/draxlr.png"
                      alt="Draxlr"
                      placeholder="blurred"
                      width={400}
                      style={{ borderRadius: 7, marginBottom: 13 }}
                    />
                    <br />
                    <p className="has-text-black has-text-weight-bold">
                      Draxlr
                    </p>
                    <p
                      className="has-text-weight-light"
                      style={{ marginBottom: 5 }}
                    >
                      A Platform to analyze and monitor your SQL Databases.
                    </p>
                  </a>
                </motion.div>
              </Card>
              <Card>
                <motion.div
                  animate={controls}
                  initial="hidden"
                  transition={{ delay: 0.1, duration: 0.3 }}
                  variants={variants}
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
                    <p className="has-text-black has-text-weight-bold">
                      GitPro
                    </p>
                    <p
                      className="has-text-weight-light"
                      style={{ marginBottom: 5 }}
                    >
                      A platform to make repository management and developer
                      activity tracking easier.
                    </p>
                  </a>
                </motion.div>
              </Card>
              <Card>
                <motion.div
                  animate={controls}
                  initial="hidden"
                  transition={{ delay: 0.2, duration: 0.3 }}
                  variants={variants}
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
                    <p className="has-text-black has-text-weight-bold">
                      TellMe
                    </p>
                    <p
                      className="has-text-weight-light"
                      style={{ marginBottom: 5 }}
                    >
                      Application to collect and analyse irrigation data to
                      reduce water wastage.
                    </p>
                  </a>
                </motion.div>
              </Card>
            </Grid>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RecentWork

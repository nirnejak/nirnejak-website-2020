import * as React from "react"
import { useInView } from "react-intersection-observer"

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { motion, useAnimation } from "framer-motion"
import useSound from "use-sound"

import tickSfx from "../../sounds/tick.wav"
import Card from "../atoms/Card"
import Grid from "../atoms/Grid"

const RecentBlogs: React.FC = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  const [play] = useSound(tickSfx)

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
          <h2 className="is-huge">Blogs</h2>
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
                    href="https://www.draxlr.com/blogs/postgres-hstore-vs-json-comparing-different-unstructured-data-types-in-postgresql/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <StaticImage
                      src="../../images/blogs/postgres-hstore-vs-json.png"
                      alt="Postgres hstore vs JSON - comparing different unstructured data types in PostgreSQL"
                      placeholder="blurred"
                      width={400}
                      style={{ borderRadius: 7, marginBottom: 13 }}
                    />
                    <p className="has-text-black has-text-weight-bold">
                      Postgres hstore vs JSON - comparing different unstructured
                      data types in PostgreSQL
                    </p>
                  </a>
                </motion.div>
              </Card>
              <Card>
                <motion.div
                  animate={controls}
                  initial="hidden"
                  transition={{ delay: 0, duration: 0.3 }}
                  variants={variants}
                >
                  <a
                    href="https://www.draxlr.com/blogs/postgres-hstore-data-type-and-how-to-use-it/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <StaticImage
                      src="../../images/blogs/postgres_hstore.png"
                      alt="Postgres HStore"
                      placeholder="blurred"
                      width={400}
                      style={{ borderRadius: 7, marginBottom: 13 }}
                    />
                    <p className="has-text-black has-text-weight-bold">
                      Postgres HStore data type and how to use it?
                    </p>
                  </a>
                </motion.div>
              </Card>
              <Card>
                <motion.div
                  animate={controls}
                  initial="hidden"
                  transition={{ delay: 0, duration: 0.3 }}
                  variants={variants}
                >
                  <a
                    href="https://www.draxlr.com/blogs/postgres-json-data-type-and-how-to-query-it/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <StaticImage
                      src="../../images/blogs/postgres_json.png"
                      alt="Postgres JSON"
                      placeholder="blurred"
                      width={400}
                      style={{ borderRadius: 7, marginBottom: 13 }}
                    />
                    <p className="has-text-black has-text-weight-bold">
                      Postgres JSON data type and how to query it?
                    </p>
                  </a>
                </motion.div>
              </Card>
            </Grid>
          </div>
          <div style={{ margin: 50 }} className="has-text-centered">
            <Link
              to="/blogs/"
              className="link"
              style={{ marginRight: 0 }}
              onClick={() => play()}
            >
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

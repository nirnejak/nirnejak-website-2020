import * as React from "react"
import { useInView } from "react-intersection-observer"

import { CodepenFill, GithubFill, DribbbleFill, LinkedinFill } from "akar-icons"
import { motion, useAnimation } from "framer-motion"

const Footer: React.FC = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  React.useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const variants = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0 },
  }

  return (
    <div
      className="has-text-centered"
      style={{ margin: "100px 10px 200px 10px" }}
    >
      <div className="is-size-3 has-text-weight-bold has-text-black">
        Follow Me on
      </div>

      <div style={{ marginBottom: 10, marginTop: 10 }}>
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
      <div
        ref={ref}
        className="icons-container"
        style={{ flexWrap: "wrap", justifyContent: "center" }}
      >
        <motion.div
          animate={controls}
          initial="hidden"
          transition={{ delay: 0, duration: 0.3 }}
          variants={variants}
          className="icon-container"
          style={{ margin: "20px 15px" }}
        >
          <a
            href="https://github.com/nirnejak/"
            title="Jitendra Nirnejak's Github Portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubFill />
          </a>
        </motion.div>
        <motion.div
          animate={controls}
          initial="hidden"
          transition={{ delay: 0.1, duration: 0.3 }}
          variants={variants}
          className="icon-container"
          style={{ margin: "20px 15px" }}
        >
          <a
            href="https://codepen.io/nirnejak/"
            title="Jitendra Nirnejak's Codepen Profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CodepenFill />
          </a>
        </motion.div>
        <motion.div
          animate={controls}
          initial="hidden"
          transition={{ delay: 0.2, duration: 0.3 }}
          variants={variants}
          className="icon-container"
          style={{ margin: "20px 15px" }}
        >
          <a
            href="https://www.dribbble.com/nirnejak/"
            title="Jitendra Nirnejak's Dribbble Portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DribbbleFill />
          </a>
        </motion.div>
        <motion.div
          animate={controls}
          initial="hidden"
          transition={{ delay: 0.3, duration: 0.3 }}
          variants={variants}
          className="icon-container"
          style={{ margin: "20px 15px" }}
        >
          <a
            href="https://www.behance.net/nirnejak/"
            title="Jitendra Nirnejak's Behance Portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="fa-2x">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="behance"
                className="svg-inline--fa fa-behance fa-w-18"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2.6-8.7.6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z"
                ></path>
              </svg>
            </span>
          </a>
        </motion.div>
        <motion.div
          animate={controls}
          initial="hidden"
          transition={{ delay: 0.4, duration: 0.3 }}
          variants={variants}
          className="icon-container"
          style={{ margin: "20px 15px" }}
        >
          <a
            href="https://www.linkedin.com/in/nirnejak/"
            title="Jitendra Nirnejak's LinkedIn Profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinFill />
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default Footer

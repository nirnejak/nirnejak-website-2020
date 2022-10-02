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

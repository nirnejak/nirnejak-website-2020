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

  const [iconColor, setIconColor] = React.useState("#000")

  React.useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)")

    media.matches && setIconColor("#fff")

    media.addEventListener("change", (event) => {
      setIconColor(event.matches ? "#fff" : "#000")
    })
  }, [])

  return (
    <div
      className="has-text-centered"
      style={{ margin: "100px 10px 200px 10px" }}
    >
      <div className="is-size-3 has-text-weight-bold has-text-black">
        Follow me on
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
          transition={{ delay: 0.05, duration: 0.3 }}
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
          transition={{ delay: 0.1, duration: 0.3 }}
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
          transition={{ delay: 0.15, duration: 0.3 }}
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
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="icon-container"
          style={{ margin: "20px 15px" }}
        >
          <a
            href="https://www.producthunt.com/@nirnejak"
            title="Jitendra Nirnejak's Product Hunt Profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width={24}
              height={24}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill={iconColor}
                d="M326.3 218.8c0 20.5-16.7 37.2-37.2 37.2h-70.3v-74.4h70.3c20.5 0 37.2 16.7 37.2 37.2zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-128.1-37.2c0-47.9-38.9-86.8-86.8-86.8H169.2v248h49.6v-74.4h70.3c47.9 0 86.8-38.9 86.8-86.8z"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default Footer

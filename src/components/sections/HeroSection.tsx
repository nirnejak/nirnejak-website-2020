import * as React from "react"

import {
  CodepenFill,
  GithubFill,
  DribbbleFill,
  BehanceFill,
  LinkedinFill,
} from "akar-icons"
import { motion } from "framer-motion"

const HeroSection: React.FC = () => {
  const [iconColor, setIconColor] = React.useState("#000")

  React.useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        setIconColor(event.matches ? "#fff" : "#000")
      })
  }, [])

  return (
    <section className="hero is-fullheight-with-navbar">
      <div className="hero-body">
        <div className="container">
          <h1 className="is-size-1 has-text-black">
            Hi, <br />
            I&apos;m Jitendra Nirnejak.
          </h1>
          <br />
          <p className="is-size-3 has-text-weight-light">
            <span className="has-text-weight-bold is-gradient-1">
              Developer
            </span>
            ,{" "}
            <span className="has-text-weight-bold is-gradient-2">Designer</span>
            , and definitely not a{" "}
            <span className="has-text-weight-bold is-gradient-3">Blogger</span>
          </p>

          <div style={{ margin: "30 0px" }}>
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

          <div className="icons-container">
            <motion.div
              animate={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0 }}
              transition={{ delay: 0, duration: 0.3 }}
              className="icon-container"
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
            <motion.div
              animate={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0 }}
              transition={{ delay: 0, duration: 0.3 }}
              className="icon-container"
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
              animate={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="icon-container"
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
              animate={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="icon-container"
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
              animate={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              className="icon-container"
            >
              <a
                href="https://www.behance.net/nirnejak/"
                title="Jitendra Nirnejak's Behance Portfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BehanceFill />
              </a>
            </motion.div>
            <motion.div
              animate={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0 }}
              transition={{ delay: 0.4, duration: 0.3 }}
              className="icon-container"
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
      </div>
      <div className="hero-foot has-text-centered">
        <span>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="angle-double-down"
            className="svg-inline--fa fa-angle-double-down fa-w-10"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              fill="currentColor"
              d="M143 256.3L7 120.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0L313 86.3c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.4 9.5-24.6 9.5-34 .1zm34 192l136-136c9.4-9.4 9.4-24.6 0-33.9l-22.6-22.6c-9.4-9.4-24.6-9.4-33.9 0L160 352.1l-96.4-96.4c-9.4-9.4-24.6-9.4-33.9 0L7 278.3c-9.4 9.4-9.4 24.6 0 33.9l136 136c9.4 9.5 24.6 9.5 34 .1z"
            ></path>
          </svg>
        </span>
        <br />
        <br />
      </div>
    </section>
  )
}

export default HeroSection

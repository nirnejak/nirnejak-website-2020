import * as React from "react"
import { useInView } from "react-intersection-observer"

import { motion, useAnimation } from "framer-motion"

import SEO from "../components/seo"

const UsesPage: React.FC = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  React.useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <>
      <SEO title="Uses" />
      <section className="hero text-gray-500">
        <div className="hero-body">
          <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.3 }}
            variants={{
              visible: { opacity: 1, translateY: -5 },
              hidden: { opacity: 0, translateY: 0 },
            }}
            className="container"
          >
            <h1 className="text-7xl font-bold text-white mb-3 mt-24">Uses.</h1>

            <p className="text-3xl">What I&apos;m using for 2022</p>

            <div className="mt-5">
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

            <h2
              className="text-5xl font-bold text-white"
              style={{ marginBottom: 10, marginTop: 70 }}
            >
              Languages and Frameworks
            </h2>
            <p className="text-3xl">React, Vue, Gatsby and Node.js</p>

            <h2
              className="text-5xl font-bold text-white"
              style={{ marginBottom: 10, marginTop: 70 }}
            >
              Design Tools
            </h2>
            <p className="text-3xl">Figma, Affinity Photos and Procreate</p>

            <h2
              className="text-5xl font-bold text-white"
              style={{ marginBottom: 10, marginTop: 70 }}
            >
              Terminal and Editor
            </h2>
            <p className="text-3xl">
              ZSH + Oh-my-zsh, iTerm, VS Code(
              <a
                href="https://gist.github.com/nirnejak/3773427ef028723130d2e6d0abdab8e2/"
                target="_blank"
                rel="noopener noreferrer"
                className="link text-3xl"
              >
                Settings Gist
              </a>
              )
            </p>

            <h2
              className="text-5xl font-bold text-white"
              style={{ marginBottom: 10, marginTop: 70 }}
            >
              Gear
            </h2>
            <p className="text-3xl">iPhone XR, iPad Pro 11, MacBook Pro(M1)</p>

            <h2
              className="text-5xl font-bold text-white"
              style={{ marginBottom: 10, marginTop: 70 }}
            >
              Podcasts, I listen to
            </h2>
            <p className="text-3xl">Syntax and PodRocket</p>

            <h2
              className="text-5xl font-bold text-white"
              style={{ marginBottom: 10, marginTop: 70 }}
            >
              What&apos;s for 2
            </h2>
            <p className="text-3xl">Testing and Typescript</p>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default UsesPage

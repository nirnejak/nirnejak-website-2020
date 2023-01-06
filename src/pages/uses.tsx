import * as React from "react"
import { useInView } from "react-intersection-observer"

import { motion, useAnimation } from "framer-motion"

import SEO from "../components/seo"

export const Head: React.FC = () => {
  return <SEO title="Uses" />
}

const UsesPage: React.FC = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  React.useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <section className="hero">
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
          <h1 className="is-huge">Uses</h1>
          <p className="is-size-3 has-text-weight-light">
            What I&apos;m using for 2023
          </p>

          <h2
            className="is-size-2 has-text-black"
            style={{ marginBottom: 10, marginTop: 70 }}
          >
            Languages and Frameworks
          </h2>
          <p className="is-size-3 has-text-weight-light">
            TypeScript, React, Vue and Node.js
          </p>

          <h2
            className="is-size-2 has-text-black"
            style={{ marginBottom: 10, marginTop: 70 }}
          >
            Design Tools
          </h2>
          <p className="is-size-3 has-text-weight-light">Figma and Procreate</p>

          <h2
            className="is-size-2 has-text-black"
            style={{ marginBottom: 10, marginTop: 70 }}
          >
            Terminal and Editor
          </h2>
          <p className="is-size-3 has-text-weight-light">
            ZSH + Oh-my-zsh, iTerm, VS Code(
            <a
              href="https://gist.github.com/nirnejak/3773427ef028723130d2e6d0abdab8e2/"
              target="_blank"
              rel="noopener noreferrer"
              className="link is-size-3"
            >
              Settings Gist
            </a>
            )
          </p>

          <h2
            className="is-size-2 has-text-black"
            style={{ marginBottom: 10, marginTop: 70 }}
          >
            Gear
          </h2>
          <p className="is-size-3 has-text-weight-light">
            iPhone 14 Pro, iPad Pro 11, MacBook Air(M2)
          </p>

          <h2
            className="is-size-2 has-text-black"
            style={{ marginBottom: 10, marginTop: 70 }}
          >
            Podcasts, I listen to
          </h2>
          <p className="is-size-3 has-text-weight-light">
            Syntax and PodRocket
          </p>

          <h2
            className="is-size-2 has-text-black"
            style={{ marginBottom: 10, marginTop: 70 }}
          >
            What was 2022 about
          </h2>
          <p className="is-size-3 has-text-weight-light">
            Typescript and Testing
          </p>

          <h2
            className="is-size-2 has-text-black"
            style={{ marginBottom: 10, marginTop: 70 }}
          >
            What&apos;s for 2023
          </h2>
          <p className="is-size-3 has-text-weight-light">Fastify and Prisma</p>
        </motion.div>
      </div>
    </section>
  )
}

export default UsesPage

import * as React from "react"
import { useInView } from "react-intersection-observer"

import { motion, useAnimation } from "framer-motion"

import FigmaLogo from "../../images/skills/figma.svg"
import NodeLogo from "../../images/skills/nodejs.svg"
import ReactLogo from "../../images/skills/reactjs.svg"
import VueLogo from "../../images/skills/vuejs.svg"

const SkillsSection: React.FC = () => {
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
          <h2 className="is-huge">Skills</h2>
          <div className="skills-container" ref={ref}>
            <motion.div
              animate={controls}
              initial="hidden"
              transition={{ delay: 0, duration: 0.3 }}
              variants={variants}
              className="skill-container"
            >
              <img src={FigmaLogo} alt="Figma" title="Figma" />
            </motion.div>

            <motion.div
              animate={controls}
              initial="hidden"
              transition={{ delay: 0.1, duration: 0.3 }}
              variants={variants}
              className="skill-container"
            >
              <img src={ReactLogo} alt="React.js" title="React.js" />
            </motion.div>

            <motion.div
              animate={controls}
              initial="hidden"
              transition={{ delay: 0.2, duration: 0.3 }}
              variants={variants}
              className="skill-container"
            >
              <img src={VueLogo} alt="Vue.js" title="Vue.js" />
            </motion.div>

            <motion.div
              animate={controls}
              initial="hidden"
              transition={{ delay: 0.3, duration: 0.3 }}
              variants={variants}
              className="skill-container"
            >
              <img src={NodeLogo} alt="Node.js" title="Node.js" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection

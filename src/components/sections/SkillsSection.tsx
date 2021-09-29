import * as React from "react"
import { useInView } from "react-intersection-observer"

import { motion, useAnimation } from "framer-motion"

import PhotoshopLogo from "../../images/skills/adobe-photoshop.svg"
import AdobeXDLogo from "../../images/skills/adobe-xd.svg"
import FigmaLogo from "../../images/skills/figma.svg"
import GatsbyLogo from "../../images/skills/gatsby.svg"
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

  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <h2 className="is-huge">Skills</h2>
          <div className="skills-container" ref={ref}>
            <motion.div
              animate={controls}
              initial="hidden"
              transition={{ delay: 0.1, duration: 0.3 }}
              variants={{
                visible: { opacity: 1, translateY: -5 },
                hidden: { opacity: 0, translateY: 0 },
              }}
              className="skill-container"
            >
              <img src={ReactLogo} alt="React.js" title="React.js" />
            </motion.div>

            <motion.div
              animate={controls}
              initial="hidden"
              transition={{ delay: 0.2, duration: 0.3 }}
              variants={{
                visible: { opacity: 1, translateY: -5 },
                hidden: { opacity: 0, translateY: 0 },
              }}
              className="skill-container"
            >
              <img src={GatsbyLogo} alt="Gatsby" title="Gatsby" />
            </motion.div>

            <motion.div
              animate={controls}
              initial="hidden"
              transition={{ delay: 0.3, duration: 0.3 }}
              variants={{
                visible: { opacity: 1, translateY: -5 },
                hidden: { opacity: 0, translateY: 0 },
              }}
              className="skill-container"
            >
              <img src={NodeLogo} alt="Node.js" title="Node.js" />
            </motion.div>

            <motion.div
              animate={controls}
              initial="hidden"
              transition={{ delay: 0.4, duration: 0.3 }}
              variants={{
                visible: { opacity: 1, translateY: -5 },
                hidden: { opacity: 0, translateY: 0 },
              }}
              className="skill-container"
            >
              <img src={VueLogo} alt="Vue.js" title="Vue.js" />
            </motion.div>
          </div>
          <div className="skills-container">
            <motion.div
              animate={controls}
              initial="hidden"
              transition={{ delay: 0.5, duration: 0.3 }}
              variants={{
                visible: { opacity: 1, translateY: -5 },
                hidden: { opacity: 0, translateY: 0 },
              }}
              className="skill-container"
            >
              <img src={FigmaLogo} alt="Figma" title="Figma" />
            </motion.div>

            <motion.div
              animate={controls}
              initial="hidden"
              transition={{ delay: 0.6, duration: 0.3 }}
              variants={{
                visible: { opacity: 1, translateY: -5 },
                hidden: { opacity: 0, translateY: 0 },
              }}
              className="skill-container"
            >
              <img src={AdobeXDLogo} alt="Adobe XD" title="Adobe XD" />
            </motion.div>

            <motion.div
              animate={controls}
              initial="hidden"
              transition={{ delay: 0.7, duration: 0.3 }}
              variants={{
                visible: { opacity: 1, translateY: -5 },
                hidden: { opacity: 0, translateY: 0 },
              }}
              className="skill-container"
            >
              <img
                src={PhotoshopLogo}
                alt="Adobe Photoshop"
                title="Adobe Photoshop"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection

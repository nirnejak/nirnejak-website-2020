import * as React from "react"

import Fade from "react-reveal/Fade"

import PhotoshopLogo from "../../images/skills/adobe-photoshop.svg"
import AdobeXDLogo from "../../images/skills/adobe-xd.svg"
import FigmaLogo from "../../images/skills/figma.svg"
import GatsbyLogo from "../../images/skills/gatsby.svg"
import NodeLogo from "../../images/skills/nodejs.svg"
import ReactNativeLogo from "../../images/skills/react-native.svg"
import ReactLogo from "../../images/skills/reactjs.svg"
import VueLogo from "../../images/skills/vuejs.svg"

const SkillsSection: React.FC = (): React.ReactElement => {
  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <h2 className="is-huge">Skills</h2>
          <div className="skills-container">
            <Fade>
              <div className="skill-container">
                <img src={ReactLogo} alt="React.js" title="React.js" />
              </div>
            </Fade>
            <Fade>
              <div className="skill-container">
                <img
                  src={ReactNativeLogo}
                  alt="React Native"
                  title="React Native"
                />
              </div>
            </Fade>
            <Fade>
              <div className="skill-container">
                <img src={GatsbyLogo} alt="Gatsby" title="Gatsby" />
              </div>
            </Fade>
            <Fade>
              <div className="skill-container">
                <img src={NodeLogo} alt="Node.js" title="Node.js" />
              </div>
            </Fade>
            <Fade>
              <div className="skill-container">
                <img src={VueLogo} alt="Vue.js" title="Vue.js" />
              </div>
            </Fade>
          </div>
          <div className="skills-container">
            <Fade>
              <div className="skill-container">
                <img src={FigmaLogo} alt="Figma" title="Figma" />
              </div>
            </Fade>
            <Fade>
              <div className="skill-container">
                <img src={AdobeXDLogo} alt="Adobe XD" title="Adobe XD" />
              </div>
            </Fade>
            <Fade>
              <div className="skill-container">
                <img
                  src={PhotoshopLogo}
                  alt="Adobe Photoshop"
                  title="Adobe Photoshop"
                />
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection

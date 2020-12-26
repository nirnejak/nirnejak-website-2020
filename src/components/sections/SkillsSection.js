import React from "react"
import Fade from "react-reveal/Fade"

const SkillsSection = () => {
  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <h2 className="is-huge">Skills</h2>
          <br />
          <br />
          <div className="skills-container">
            <Fade>
              <div className="skill-container">
                <img
                  src={require("../../images/skills/reactjs.svg")}
                  alt="React.js"
                  title="React.js"
                />
              </div>
            </Fade>
            <Fade>
              <div className="skill-container">
                <img
                  src={require("../../images/skills/gatsby.svg")}
                  alt="Gatsby"
                  title="Gatsby"
                />
              </div>
            </Fade>
            <Fade>
              <div className="skill-container">
                <img
                  src={require("../../images/skills/nodejs.svg")}
                  alt="Node.js"
                  title="Node.js"
                />
              </div>
            </Fade>
            <Fade>
              <div className="skill-container">
                <img
                  src={require("../../images/skills/vuejs.svg")}
                  alt="Vue.js"
                  title="Vue.js"
                />
              </div>
            </Fade>
          </div>
          <div className="skills-container">
            <Fade>
              <div className="skill-container">
                <img
                  src={require("../../images/skills/figma.svg")}
                  alt="Figma"
                  title="Figma"
                />
              </div>
            </Fade>
            <Fade>
              <div className="skill-container">
                <img
                  src={require("../../images/skills/adobe-xd.svg")}
                  alt="Adobe XD"
                  title="Adobe XD"
                />
              </div>
            </Fade>
            <Fade>
              <div className="skill-container">
                <img
                  src={require("../../images/skills/adobe-photoshop.svg")}
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

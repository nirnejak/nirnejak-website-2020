import React from "react"

import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"

import './main.scss'

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <section className="hero">
      <div className="hero-head">
        <Header />
      </div>
      <div className="hero-body">
        <div className="container">
          <h1 className="is-size-1 has-text-black">Uses.</h1>
          <br />
          <p className="is-size-3 has-text-weight-light">What I'm using for 2020</p>

          <div style={{ margin: "30 0px" }}>
            <svg width="64" height="5" viewBox="0 0 64 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="64" height="5" fill="#027BFF" />
            </svg>
          </div>

          <br /><br /><br /><br />
          <h2 className="is-huge">Technology</h2>
          <br /><br />

          <div className="skills-container">
            <div className="skill-container">
              <img src={require("../images/skills/nodejs.svg")} alt="Node.js" title="Node.js" />
            </div>
            <div className="skill-container">
              <img src={require("../images/skills/reactjs.svg")} alt="React.js" title="React.js" />
            </div>
            <div className="skill-container">
              <img src={require("../images/skills/vuejs.svg")} alt="Vue.js" title="Vue.js" />
            </div>
            <div className="skill-container">
              <img src={require("../images/skills/gatsby.svg")} alt="Gatsby" title="Gatsby" />
            </div>
          </div>
          <div className="skills-container">
            <div className="skill-container">
              <img src={require("../images/skills/figma.svg")} alt="Figma" title="Figma" />
            </div>
            <div className="skill-container">
              <img src={require("../images/skills/adobe-xd.svg")} alt="Adobe XD" title="Adobe XD" />
            </div>
            <div className="skill-container">
              <img src={require("../images/skills/adobe-photoshop.svg")} alt="Adobe Photoshop" title="Adobe Photoshop" />
            </div>
          </div>

          <br /><br /><br /><br />
          <h2 className="is-huge">Devices</h2>
          <br /><br />

          <div className="skills-container">
            <div className="skill-container">
              <img src={require("../images/skills/nodejs.svg")} alt="Node.js" title="Node.js" />
            </div>
            <div className="skill-container">
              <img src={require("../images/skills/reactjs.svg")} alt="React.js" title="React.js" />
            </div>
            <div className="skill-container">
              <img src={require("../images/skills/vuejs.svg")} alt="Vue.js" title="Vue.js" />
            </div>
          </div>

          <br /><br /><br /><br />
          <h2 className="is-huge">Tools</h2>
          <br /><br />

          <div className="skills-container">
            <div className="skill-container">
              <img src={require("../images/skills/nodejs.svg")} alt="Node.js" title="Node.js" />
            </div>
            <div className="skill-container">
              <img src={require("../images/skills/reactjs.svg")} alt="React.js" title="React.js" />
            </div>
            <div className="skill-container">
              <img src={require("../images/skills/vuejs.svg")} alt="Vue.js" title="Vue.js" />
            </div>
            <div className="skill-container">
              <img src={require("../images/skills/gatsby.svg")} alt="Gatsby" title="Gatsby" />
            </div>
          </div>

        </div>
      </div>
      <div className="hero-foot has-text-centered">
        <i className="fas fa-angle-double-down" />
        <br />
        <br />
      </div>
    </section>
    <Footer />
  </>
)

export default IndexPage

import React from "react"

import SEO from "../components/seo"
import Footer from "../components/footer"

import FormBlogImage from "../components/blogs/form_blog"
import GatsbyPluginBlogImage from "../components/blogs/gatsby_plugins"
import VuePluginBlogImage from "../components/blogs/vue_plugin"

import GitProImage from "../components/works/gitpro"
import SwiftUIAppImage from "../components/works/swiftui"
import TellMeImage from "../components/works/tellme"

import './main.scss'

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container">
          <h1 className="is-size-1 has-text-black">Hi, <br />I'm Jitendra Nirnejak.</h1>
          <br />
          <p className="is-size-3 has-text-weight-light">UI/UX Designer, Full-Stack Developer, Tech Blogger</p>

          <div style={{ margin: "30 0px" }}>
            <svg width="64" height="5" viewBox="0 0 64 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="64" height="5" fill="#027BFF" />
            </svg>
          </div>

          <div className="icons-container">
            <div className="icon-container">
              <a
                href="https://github.com/nirnejak/"
                target="_blank"
                rel="noopener noreferrer"
                title="Jitendra Nirnejak's Github Portfolio"
              >
                <span className="fa-2x">
                  <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" class="svg-inline--fa fa-github fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                </span>
              </a>
            </div>
            <div className="icon-container">
              <a
                href="https://codepen.io/nirnejak"
                target="_blank"
                rel="noopener noreferrer"
                title="Jitendra Nirnejak's Codepen Profile"
              >
                <span className="fa-2x">
                  <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="codepen" class="svg-inline--fa fa-codepen fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z"></path></svg>
                </span>
              </a>
            </div>
            <div className="icon-container">
              <a
                href="https://www.dribbble.com/nirnejak/"
                target="_blank"
                rel="noopener noreferrer"
                title="Jitendra Nirnejak's Dribbble Portfolio"
              >
                <span className="fa-2x">
                  <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="dribbble" class="svg-inline--fa fa-dribbble fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z"></path></svg>
                </span>
              </a>
            </div>
            <div className="icon-container">
              <a
                href="https://www.behance.net/nirnejak"
                target="_blank"
                rel="noopener noreferrer"
                title="Jitendra Nirnejak's Behance Portfolio"
              >
                <span className="fa-2x">
                  <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="behance-square" class="svg-inline--fa fa-behance-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M186.5 293c0 19.3-14 25.4-31.2 25.4h-45.1v-52.9h46c18.6.1 30.3 7.8 30.3 27.5zm-7.7-82.3c0-17.7-13.7-21.9-28.9-21.9h-39.6v44.8H153c15.1 0 25.8-6.6 25.8-22.9zm132.3 23.2c-18.3 0-30.5 11.4-31.7 29.7h62.2c-1.7-18.5-11.3-29.7-30.5-29.7zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zM271.7 185h77.8v-18.9h-77.8V185zm-43 110.3c0-24.1-11.4-44.9-35-51.6 17.2-8.2 26.2-17.7 26.2-37 0-38.2-28.5-47.5-61.4-47.5H68v192h93.1c34.9-.2 67.6-16.9 67.6-55.9zM380 280.5c0-41.1-24.1-75.4-67.6-75.4-42.4 0-71.1 31.8-71.1 73.6 0 43.3 27.3 73 71.1 73 33.2 0 54.7-14.9 65.1-46.8h-33.7c-3.7 11.9-18.6 18.1-30.2 18.1-22.4 0-34.1-13.1-34.1-35.3h100.2c.1-2.3.3-4.8.3-7.2z"></path></svg>
                </span>
              </a>
            </div>
            <div className="icon-container">
              <a
                href="https://www.linkedin.com/in/nirnejak/"
                target="_blank"
                rel="noopener noreferrer"
                title="Jitendra Nirnejak's Linked Profile"
              >
                <span className="fa-2x">
                  <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin" class="svg-inline--fa fa-linkedin fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
                </span>
              </a>
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
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <h2 className="is-huge">Blogs</h2>
          <br /><br />
          <div className="image-contents-container">
            <div className="image-content-container">
              <a href="https://www.inkoop.io/blog/how-to-ensure-great-user-experience-on-forms/">
                <FormBlogImage />
                <br />
                <p className="has-text-black has-text-weight-bold">Forms that don't suck | How to ensure great user experience on forms</p>
                <p className="has-text-weight-light" style={{ marginBottom: 5 }}>A guide to building input forms that are easy to use and aesthetically pleasing.</p>
              </a>
            </div>
            <div className="image-content-container">
              <a href="https://www.inkoop.io/blog/must-have-gatsby-plugins-for-a-great-blog/">
                <GatsbyPluginBlogImage />
                <br />
                <p className="has-text-black has-text-weight-bold">Must have Gatsby plugins for a great blog</p>
                <p className="has-text-weight-light" style={{ marginBottom: 5 }}>A comprehensive list of extremely useful Gatsby Plugins that can help you build, deploy and monitor a great blog.</p>
              </a>
            </div>
            <div className="image-content-container">
              <a href="https://www.inkoop.io/blog/building-custom-plugins-for-vue/">
                <VuePluginBlogImage />
                <br />
                <p className="has-text-black has-text-weight-bold">Building custom plugins for Vue.js | Supercharge your Vue.js Development</p>
                <p className="has-text-weight-light" style={{ marginBottom: 5 }}>A guide to building custom global vue.js plugins.</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <h2 className="is-huge">Skills</h2>
          <br /><br />
          <div className="skills-container">
            <div className="skill-container">
              <img src={require("../images/skills/nodejs.svg")} alt="Node.js" />
            </div>
            <div className="skill-container">
              <img src={require("../images/skills/reactjs.svg")} alt="React.js" />
            </div>
            <div className="skill-container">
              <img src={require("../images/skills/vuejs.svg")} alt="Vue.js" />
            </div>
            <div className="skill-container">
              <img src={require("../images/skills/gatsby.svg")} alt="Gatsby" />
            </div>
          </div>
          <div className="skills-container">
            <div className="skill-container">
              <img src={require("../images/skills/figma.svg")} alt="Figma" />
            </div>
            <div className="skill-container">
              <img src={require("../images/skills/adobe-xd.svg")} alt="Adobe XD" />
            </div>
            <div className="skill-container">
              <img src={require("../images/skills/adobe-photoshop.svg")} alt="Adobe Photoshop" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <h2 className="is-huge">Work</h2>
          <br /><br />
          <div className="image-contents-container">
            <div className="image-content-container">
              <a href="http://gitpro.app/">
                <GitProImage />
                <br />
                <p className="has-text-black has-text-weight-bold">GitPro</p>
                <p className="has-text-weight-light" style={{ marginBottom: 5 }}>A platform to make repository management and developer activity tracking easier.</p>
              </a>
            </div>
            <div className="image-content-container">
              <a href="https://dribbble.com/shots/4645605-TellMe-UI-Dashboard">
                <TellMeImage />
                <br />
                <p className="has-text-black has-text-weight-bold">TellMe</p>
                <p className="has-text-weight-light" style={{ marginBottom: 5 }}>Application to collect and analyse irrigation data to reduce water wastage.</p>
              </a>
            </div>
            <div className="image-content-container">
              <a href="https://github.com/nirnejak/swift-tab-app">
                <SwiftUIAppImage />
                <br />
                <p className="has-text-black has-text-weight-bold">SwiftUI Tab App</p>
                <p className="has-text-weight-light" style={{ marginBottom: 5 }}>A SwiftUI app for iOS for Task Management.</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <h2 className="is-huge">Contact</h2>
          <p className="is-size-2 has-text-right has-text-black has-text-weight-light">7869290297</p>
          <p className="is-size-2 has-text-right has-text-black has-text-weight-light">jeetnirnejak@gmail.com</p>
        </div>
      </div>
    </section>
    <Footer />
  </>
)

export default IndexPage

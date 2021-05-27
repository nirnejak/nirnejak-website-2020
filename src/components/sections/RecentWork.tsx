import React, { FC, ReactElement } from "react"

import { StaticImage } from "gatsby-plugin-image"

import Fade from "react-reveal/Fade"

const RecentWork: FC = (): ReactElement => {
  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <h2 className="is-huge">Work</h2>
          <br />
          <br />
          <div className="image-contents-container">
            <Fade>
              <div className="image-content-container">
                <a
                  href="http://gitpro.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <StaticImage
                    src="../../images/works/gitpro.jpeg"
                    alt="GitPro Screenshot"
                    placeholder="blurred"
                    width={400}
                    style={{ borderRadius: 7 }}
                  />
                  <br />
                  <p className="has-text-black has-text-weight-bold">GitPro</p>
                  <p
                    className="has-text-weight-light"
                    style={{ marginBottom: 5 }}
                  >
                    A platform to make repository management and developer
                    activity tracking easier.
                  </p>
                </a>
              </div>
            </Fade>
            <Fade>
              <div className="image-content-container">
                <a
                  href="https://dribbble.com/shots/4645605-TellMe-UI-Dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <StaticImage
                    src="../../images/works/tellme.png"
                    alt="TellMe App Screenshot"
                    placeholder="blurred"
                    width={400}
                    style={{ borderRadius: 7 }}
                  />
                  <br />
                  <p className="has-text-black has-text-weight-bold">TellMe</p>
                  <p
                    className="has-text-weight-light"
                    style={{ marginBottom: 5 }}
                  >
                    Application to collect and analyse irrigation data to reduce
                    water wastage.
                  </p>
                </a>
              </div>
            </Fade>
            <Fade>
              <div className="image-content-container">
                <a
                  href="https://github.com/nirnejak/swift-tab-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <StaticImage
                    src="../../images/works/swiftui.png"
                    alt="SwiftUI App"
                    placeholder="blurred"
                    width={400}
                    style={{ borderRadius: 7 }}
                  />
                  <br />
                  <p className="has-text-black has-text-weight-bold">
                    SwiftUI Tab App
                  </p>
                  <p
                    className="has-text-weight-light"
                    style={{ marginBottom: 5 }}
                  >
                    A SwiftUI app for iOS for Task Management.
                  </p>
                </a>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RecentWork

import * as React from "react"

import Footer from "../components/footer"
import Header from "../components/header"
import SEO from "../components/seo"

const IndexPage: React.FC = () => (
  <>
    <SEO title="Uses" />
    <Header />
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <h1 className="is-size-1 has-text-black">Uses.</h1>
          <br />
          <p className="is-size-3 has-text-weight-light">
            What I&apos;m using for 2021
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

          <h2
            className="is-size-2 has-text-black"
            style={{ marginBottom: 10, marginTop: 70 }}
          >
            Languages and Frameworks
          </h2>
          <p className="is-size-3 has-text-weight-light">
            React, Vue, Gatsby, Node.js
          </p>

          <h2
            className="is-size-2 has-text-black"
            style={{ marginBottom: 10, marginTop: 70 }}
          >
            Design Tools
          </h2>
          <p className="is-size-3 has-text-weight-light">
            Figma, Sketch, Affinity Designer, Procreate
          </p>

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
            iPhone XR, iPad Pro 11, MacBook Pro(M1)
          </p>

          <h2
            className="is-size-2 has-text-black"
            style={{ marginBottom: 10, marginTop: 70 }}
          >
            Podcasts, I listen to
          </h2>
          <p className="is-size-3 has-text-weight-light">
            Syntax, PodRocket, The Vergecast
          </p>

          <h2
            className="is-size-2 has-text-black"
            style={{ marginBottom: 10, marginTop: 70 }}
          >
            What&apos;s for 2021
          </h2>
          <p className="is-size-3 has-text-weight-light">Typescript</p>
        </div>
      </div>
    </section>
    <Footer />
  </>
)

export default IndexPage

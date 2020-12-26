import React from "react"

import Header from "../components/header"
import SEO from "../components/seo"
import Footer from "../components/footer"

import ESLintBlogImage from "../components/blogs/eslint"
import FormBlogImage from "../components/blogs/form_blog"
import GatsbyPluginBlogImage from "../components/blogs/gatsby_plugins"
import VuePluginBlogImage from "../components/blogs/vue_plugin"
import VuesaxBlogImage from "../components/blogs/vuesax"
import JSDocBlogImage from "../components/blogs/jsdoc_for_react"

const blogs = () => (
  <>
    <SEO title="Blogs" />
    <Header />
    <div className="hero is-fullheight">
      <div className="hero-body">
        <section className="container">
          <h1 className="is-huge">Blogs</h1>
          <br />
          <br />
          <div className="image-contents-container">
            <div className="image-content-container scroll-reveal-card">
              <a
                href="https://www.inkoop.io/blog/setup-eslint-for-react-with-prettier-pre-commit-and-vscode/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ESLintBlogImage />
                <br />
                <p className="has-text-black has-text-weight-bold">
                  Setup ESLint for React with Prettier, pre-commit and VSCode
                </p>
                <p
                  className="has-text-weight-light"
                  style={{ marginBottom: 5 }}
                >
                  A Guide to setting up ESLint for React with Prettier,
                  Pre-commit Hook and Visual Studio Code for better development
                  with linting and code formatting that works with your editor.
                </p>
              </a>
            </div>
            <div className="image-content-container scroll-reveal-card">
              <a
                href="https://www.inkoop.io/blog/how-to-ensure-great-user-experience-on-forms/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FormBlogImage />
                <br />
                <p className="has-text-black has-text-weight-bold">
                  Forms that don&apos;t suck | How to ensure great user
                  experience on forms
                </p>
                <p
                  className="has-text-weight-light"
                  style={{ marginBottom: 5 }}
                >
                  A guide to building input forms that are easy to use and
                  aesthetically pleasing.
                </p>
              </a>
            </div>
            <div className="image-content-container scroll-reveal-card">
              <a
                href="https://www.inkoop.io/blog/must-have-gatsby-plugins-for-a-great-blog/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GatsbyPluginBlogImage />
                <br />
                <p className="has-text-black has-text-weight-bold">
                  Must have Gatsby plugins for a great blog
                </p>
                <p
                  className="has-text-weight-light"
                  style={{ marginBottom: 5 }}
                >
                  A comprehensive list of extremely useful Gatsby Plugins that
                  can help you build, deploy and monitor a great blog.
                </p>
              </a>
            </div>
          </div>
          <div className="image-contents-container">
            <div className="image-content-container scroll-reveal-card">
              <a
                href="https://www.inkoop.io/blog/building-custom-plugins-for-vue/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <VuePluginBlogImage />
                <br />
                <p className="has-text-black has-text-weight-bold">
                  Building custom plugins for Vue.js | Supercharge your Vue.js
                  Development
                </p>
                <p
                  className="has-text-weight-light"
                  style={{ marginBottom: 5 }}
                >
                  A guide to building custom global vue.js plugins.
                </p>
              </a>
            </div>
            <div className="image-content-container scroll-reveal-card">
              <a
                href="https://www.inkoop.io/blog/vuesax-the-all-new-vue-component-library/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <VuesaxBlogImage />
                <br />
                <p className="has-text-black has-text-weight-bold">
                  Vuesax - The all new Vue Component Library with Material
                  Design
                </p>
                <p
                  className="has-text-weight-light"
                  style={{ marginBottom: 5 }}
                >
                  Vuesax - The all new Vue Component Library with Material
                  Design
                </p>
              </a>
            </div>
            <div className="image-content-container scroll-reveal-card">
              <a
                href="https://www.inkoop.io/blog/a-guide-to-js-docs-for-react-js/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <JSDocBlogImage />
                <br />
                <p className="has-text-black has-text-weight-bold">
                  A Guide to using JSDoc for React.js | Better Documentation in
                  React
                </p>
                <p
                  className="has-text-weight-light"
                  style={{ marginBottom: 5 }}
                >
                  A Guide to using JSDoc for generating documentation for
                  react.js applications.
                </p>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
    <Footer />
  </>
)

export default blogs

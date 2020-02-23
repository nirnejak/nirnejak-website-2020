import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/seo"

import FormBlogImage from "../components/blogs/form_blog"
import GatsbyPluginBlogImage from "../components/blogs/gatsby_plugins"
import VuePluginBlogImage from "../components/blogs/vue_plugin"

const Blogs = () => (
  <>
    <SEO title="Blogs" />
    <Header />
    <div className="hero is-fullheight">
      <div className="hero-body">
        <section className="container ha">
          <h1 className="is-huge">Blogs</h1>
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
        </section>
      </div>
    </div>
    <Footer />
  </>
)

export default Blogs

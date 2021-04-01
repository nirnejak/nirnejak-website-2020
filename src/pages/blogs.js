import React from "react"
import Fade from "react-reveal/Fade"

import Header from "../components/header"
import SEO from "../components/seo"
import Footer from "../components/footer"

import { StaticImage } from "gatsby-plugin-image"

const BlogsPage = () => (
  <>
    <SEO title="Blogs" />
    <Header />
    <br />
    <br />
    <br />
    <br />
    <div className="hero is-fullheight">
      <div className="hero-body">
        <section className="container">
          <h1 className="is-huge">Blogs</h1>
          <br />
          <br />
          <div className="image-contents-container">
            {blogs.map((blog, index) => (
              <Fade key={index}>
                <div className="image-content-container">
                  <a href={blog.url} target="_blank" rel="noopener noreferrer">
                    {blog.image}
                    <br />
                    <p className="has-text-black has-text-weight-bold">
                      {blog.title}
                    </p>
                    <p className="has-text-weight-light has-text-secondary">
                      {blog.description}
                    </p>
                  </a>
                </div>
              </Fade>
            ))}
          </div>
        </section>
      </div>
    </div>
    <Footer />
  </>
)

const blogs = [
  {
    title: "How to integrate Gatsby with Shopify Store",
    description:
      "Integrate your Shopify Store with Gatsby Site, build e-commerce website using Gatsby and Shopify.",
    date: "11 Feb 2021",
    author: "Jitendra Nirnejak",
    url:
      "https://www.inkoop.io/blog/how-to-integrate-gatsby-with-shopify-store/",
    image: (
      <StaticImage
        src="../images/blogs/gatsby_shopify.png"
        alt="Gatsby and Shopify"
        placeholder="blurred"
        width={400}
        style={{ borderRadius: 7 }}
      />
    ),
  },
  {
    title: "Setup ESLint for React with Prettier, pre-commit and VSCode",
    description:
      "A Guide to setting up ESLint for React with Prettier, Pre-commit Hook and Visual Studio Code for better development with linting and code formatting that works with your editor.",
    date: "19 Nov 2020",
    author: "Jitendra Nirnejak",
    url:
      "https://www.inkoop.io/blog/setup-eslint-for-react-with-prettier-pre-commit-and-vscode/",
    image: (
      <StaticImage
        src="../images/blogs/eslint.png"
        alt="ESLint, Prettier and VSCode"
        placeholder="blurred"
        width={400}
        style={{ borderRadius: 7 }}
      />
    ),
  },
  {
    title:
      "Forms that don't suck | How to ensure great user experience on forms",
    description:
      "A guide to building input forms that are easy to use and aesthetically pleasing. UX design tips & tricks to provide better visuals & great user experience.",
    date: "10 Feb 2020",
    author: "Jitendra Nirnejak",
    url:
      "https://www.inkoop.io/blog/how-to-ensure-great-user-experience-on-forms/",
    image: (
      <StaticImage
        src="../images/blogs/form_blog.png"
        alt="Form"
        placeholder="blurred"
        width={400}
        style={{ borderRadius: 7 }}
      />
    ),
  },
  {
    title: "Must have Gatsby plugins for a great blog",
    description:
      "A comprehensive list of extremely useful Gatsby Plugins that can help you build, deploy and monitor a great blog.",
    date: "31 Jan 2020",
    author: "Jitendra Nirnejak",
    url:
      "https://www.inkoop.io/blog/must-have-gatsby-plugins-for-a-great-blog/",
    image: (
      <StaticImage
        src="../images/blogs/gatsby_plugins.png"
        alt="Gatsby Plugins"
        placeholder="blurred"
        width={400}
        style={{ borderRadius: 7 }}
      />
    ),
  },
  {
    title: "Building custom plugins for Vue.js | Supercharge Development",
    description:
      "A guide to building custom global vue.js plugins for app-wide accessible components, customs filters and custom directives.",
    date: "31 Dec 2019",
    author: "Jitendra Nirnejak",
    url: "https://www.inkoop.io/blog/building-custom-plugins-for-vue/",
    image: (
      <StaticImage
        src="../images/blogs/vue_plugin.png"
        alt="Vue Plugin"
        placeholder="blurred"
        width={400}
        style={{ borderRadius: 7 }}
      />
    ),
  },
  {
    title: "Vuesax - The all new Vue Component Library",
    description:
      "Vuesax - The all-new Vue Component Library. Why Vuesax? How to Install & Integrate Vuesax? How to customize Vuesax Theme?",
    date: "30 Nov 2019",
    author: "Jitendra Nirnejak",
    url: "https://www.inkoop.io/blog/vuesax-the-all-new-vue-component-library/",
    image: (
      <StaticImage
        src="../images/blogs/vuesax.png"
        alt="Vuesax"
        placeholder="blurred"
        width={400}
        style={{ borderRadius: 7 }}
      />
    ),
  },
  {
    title:
      "A Guide to using JSDoc for React.js | Better Documentation in React",
    description:
      "A Guide to using JSDoc for generating documentation for react.js applications. Find out the benefits of using JSDoc and using JSDoc with React Component.",
    date: "30 Oct 2019",
    author: "Jitendra Nirnejak",
    url: "https://www.inkoop.io/blog/a-guide-to-js-docs-for-react-js/",
    image: (
      <StaticImage
        src="../images/blogs/jsdoc_for_react.png"
        alt="JSDoc for React"
        placeholder="blurred"
        width={400}
        style={{ borderRadius: 7 }}
      />
    ),
  },
  {
    title:
      "AdminBro - a Modern Admin Panel for Node JS | React based Admin Panel",
    description:
      "AdminBro is a React JS based admin panel for Node JS. We talk about how to set it up and use it in Node JS applications with MongoDB and SQL Databases.",
    date: "24 Sep 2021",
    author: "Jitendra Nirnejak",
    url:
      "https://www.inkoop.io/blog/adminbro-a-modern-admin-panel-for-node-js/",
    image: (
      <StaticImage
        src="../images/blogs/admin_bro.png"
        alt="AdminBro"
        placeholder="blurred"
        width={400}
        style={{ borderRadius: 7 }}
      />
    ),
  },
]

export default BlogsPage

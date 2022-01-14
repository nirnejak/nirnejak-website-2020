import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"

import { motion } from "framer-motion"

import SEO from "../components/seo"

const blogs = [
  {
    author: "Jitendra Nirnejak",
    date: "1 Jun 2021",
    description:
      "A closer look into the new image api of Gatsby 3. What's new, what's changed and what's gone.",
    image: (
      <StaticImage
        src="../images/blogs/gatsby_3_image.png"
        alt="Gatsby v3 Image API"
        placeholder="blurred"
        width={400}
        className="rounded-md mb-4"
      />
    ),
    title: "Gatsby 3 Image - A Deep-dive into the new image API features",
    url: "https://www.inkoop.io/blog/gatsby-3-image-a-deep-dive-into-the-new-image-api-features/",
  },
  {
    author: "Jitendra Nirnejak",
    date: "11 Feb 2021",
    description:
      "Integrate your Shopify Store with Gatsby Site, build e-commerce website using Gatsby and Shopify.",
    image: (
      <StaticImage
        src="../images/blogs/gatsby_shopify.png"
        alt="Gatsby and Shopify"
        placeholder="blurred"
        width={400}
        className="rounded-md mb-4"
      />
    ),
    title: "How to integrate Gatsby with Shopify Store",
    url: "https://www.inkoop.io/blog/how-to-integrate-gatsby-with-shopify-store/",
  },
  {
    author: "Jitendra Nirnejak",
    date: "19 Nov 2020",
    description:
      "A Guide to setting up ESLint for React with Prettier, Pre-commit Hook and Visual Studio Code for better development with linting and code formatting that works with your editor.",
    image: (
      <StaticImage
        src="../images/blogs/eslint.png"
        alt="ESLint, Prettier and VSCode"
        placeholder="blurred"
        width={400}
        className="rounded-md mb-4"
      />
    ),
    title: "Setup ESLint for React with Prettier, pre-commit and VSCode",
    url: "https://www.inkoop.io/blog/setup-eslint-for-react-with-prettier-pre-commit-and-vscode/",
  },
  {
    author: "Jitendra Nirnejak",
    date: "10 Feb 2020",
    description:
      "A guide to building input forms that are easy to use and aesthetically pleasing. UX design tips & tricks to provide better visuals & great user experience.",
    image: (
      <StaticImage
        src="../images/blogs/form_blog.png"
        alt="Form"
        placeholder="blurred"
        width={400}
        className="rounded-md mb-4"
      />
    ),
    title:
      "Forms that don't suck | How to ensure great user experience on forms",
    url: "https://www.inkoop.io/blog/how-to-ensure-great-user-experience-on-forms/",
  },
  {
    author: "Jitendra Nirnejak",

    date: "31 Jan 2020",
    description:
      "A comprehensive list of extremely useful Gatsby Plugins that can help you build, deploy and monitor a great blog.",
    image: (
      <StaticImage
        src="../images/blogs/gatsby_plugins.png"
        alt="Gatsby Plugins"
        placeholder="blurred"
        width={400}
        className="rounded-md mb-4"
      />
    ),
    title: "Must have Gatsby plugins for a great blog",
    url: "https://www.inkoop.io/blog/must-have-gatsby-plugins-for-a-great-blog/",
  },
  {
    author: "Jitendra Nirnejak",

    date: "31 Dec 2019",
    description:
      "A guide to building custom global vue.js plugins for app-wide accessible components, customs filters and custom directives.",
    image: (
      <StaticImage
        src="../images/blogs/vue_plugin.png"
        alt="Vue Plugin"
        placeholder="blurred"
        width={400}
        className="rounded-md mb-4"
      />
    ),
    title: "Building custom plugins for Vue.js | Supercharge Development",
    url: "https://www.inkoop.io/blog/building-custom-plugins-for-vue/",
  },
  {
    author: "Jitendra Nirnejak",
    date: "30 Nov 2019",
    description:
      "Vuesax - The all-new Vue Component Library. Why Vuesax? How to Install & Integrate Vuesax? How to customize Vuesax Theme?",
    image: (
      <StaticImage
        src="../images/blogs/vuesax.png"
        alt="Vuesax"
        placeholder="blurred"
        width={400}
        className="rounded-md mb-4"
      />
    ),
    title: "Vuesax - The all new Vue Component Library",
    url: "https://www.inkoop.io/blog/vuesax-the-all-new-vue-component-library/",
  },
  {
    author: "Jitendra Nirnejak",
    date: "30 Oct 2019",
    description:
      "A Guide to using JSDoc for generating documentation for react.js applications. Find out the benefits of using JSDoc and using JSDoc with React Component.",
    image: (
      <StaticImage
        src="../images/blogs/jsdoc_for_react.png"
        alt="JSDoc for React"
        placeholder="blurred"
        width={400}
        className="rounded-md mb-4"
      />
    ),
    title:
      "A Guide to using JSDoc for React.js | Better Documentation in React",
    url: "https://www.inkoop.io/blog/a-guide-to-js-docs-for-react-js/",
  },
  {
    author: "Jitendra Nirnejak",
    date: "24 Sep 2021",
    description:
      "AdminBro is a React JS based admin panel for Node JS. We talk about how to set it up and use it in Node JS applications with MongoDB and SQL Databases.",
    image: (
      <StaticImage
        src="../images/blogs/admin_bro.png"
        alt="AdminBro"
        placeholder="blurred"
        width={400}
        className="rounded-md mb-4"
      />
    ),
    title:
      "AdminBro - a Modern Admin Panel for Node JS | React based Admin Panel",
    url: "https://www.inkoop.io/blog/adminbro-a-modern-admin-panel-for-node-js/",
  },
]

const BlogsPage: React.FC = () => (
  <>
    <SEO title="Blogs" />
    <div className="mt-24">
      <section className="container">
        <h1 className="text-9xl text-gray-500 pb-10 font-bold">Blogs</h1>
        <div className="grid grid-cols-3 gap-5">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, translateY: -5 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <a href={blog.url} target="_blank" rel="noopener noreferrer">
                {blog.image}
                <p className="text-white font-bold">{blog.title}</p>
                <p className="text-gray-500 has-text-secondary">
                  {blog.description}
                </p>
              </a>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  </>
)

export default BlogsPage

module.exports = (req, res) => {
  res.status(200).json(blogs)
}

const blogs = [
  {
    title: "Setup ESLint for React with Prettier, pre-commit and VSCode",
    description:
      "A Guide to setting up ESLint for React with Prettier, Pre-commit Hook and Visual Studio Code for better development with linting and code formatting that works with your editor.",
    date: "19 Nov 2020",
    author: "Jitendra Nirnejak",
  },
  {
    title:
      "Forms that don't suck | How to ensure great user experience on forms",
    description:
      "A guide to building input forms that are easy to use and aesthetically pleasing. UX design tips & tricks to provide better visuals & great user experience.",
    date: "10 Feb 2020",
    author: "Jitendra Nirnejak",
  },
  {
    title: "Must have Gatsby plugins for a great blog",
    description:
      "A comprehensive list of extremely useful Gatsby Plugins that can help you build, deploy and monitor a great blog.",
    date: "31 Jan 2020",
    author: "Jitendra Nirnejak",
  },
  {
    title: "Building custom plugins for Vue.js | Supercharge Development",
    description:
      "A guide to building custom global vue.js plugins for app-wide accessible components, customs filters and custom directives.",
    date: "31 Dec 2019",
    author: "Jitendra Nirnejak",
  },
  {
    title: "Vuesax - The all new Vue Component Library",
    description:
      "Vuesax - The all-new Vue Component Library. Why Vuesax? How to Install & Integrate Vuesax? How to customize Vuesax Theme?",
    date: "30 Nov 2019",
    author: "Jitendra Nirnejak",
  },
  {
    title:
      "A Guide to using JSDoc for React.js | Better Documentation in React",
    description:
      "A Guide to using JSDoc for generating documentation for react.js applications. Find out the benefits of using JSDoc and using JSDoc with React Component.",
    date: "30 Oct 2019",
    author: "Jitendra Nirnejak",
  },
  {
    title:
      "AdminBro - a Modern Admin Panel for Node JS | React based Admin Panel",
    description:
      "AdminBro is a React JS based admin panel for Node JS. We talk about how to set it up and use it in Node JS applications with MongoDB and SQL Databases.",
    date: "24 Sep 2020",
    author: "Jitendra Nirnejak",
  },
]

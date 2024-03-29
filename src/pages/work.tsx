import * as React from "react"
import { useInView } from "react-intersection-observer"

import { motion, useAnimation } from "framer-motion"

import WorkRow from "../components/molecules/WorkRow"
import SEO from "../components/seo"

export const Head: React.FC = () => {
  return <SEO title="Uses" />
}

const projects = [
  {
    title: "SQL Editor & Formatter",
    description: "A tool to write SQL Queries and format them.",
    link: "https://www.draxlr.com/tools/sql-formatter/",
    type: "Code",
  },
  {
    title: "Draxlr 3.0",
    description: "Draxlr is an app to build dashboards and setup alerts.",
    link: "https://app.draxlr.com/",
    type: "Design & Code",
  },
  {
    title: "Draxlr Documentation",
    description: "Wrote the product documentation for Draxlr",
    link: "https://www.draxlr.com/docs/",
    type: "Content",
  },
  {
    title: "Sup.today",
    description: "Designed the website and app UI and built the Website.",
    link: "https://sup.today/",
    type: "Design & Code",
  },
  {
    title: "Draxlr Website",
    description: "Designed and Developed the Draxlr Website.",
    link: "https://www.draxlr.com/",
    type: "Design & Code",
  },
  {
    title: "Inkoop website",
    description: "Designer and developed the new Inkoop Website",
    link: "https://www.inkoop.io/",
    type: "Design & Code",
  },
  {
    title: "Inkoop Social Media",
    description: "Designed the templates of Inkoop's social media posts.",
    link: "https://www.instagram.com/inkoopteam/",
    type: "Design",
  },
  {
    title: "GitPro",
    description: "Get insights into your teams's Github Activity",
    type: "Code",
  },
]

const WorkPage: React.FC = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  React.useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <section className="hero is-fullheight">
      <div className="hero-body">
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          transition={{ duration: 0.3 }}
          variants={{
            visible: { opacity: 1, translateY: -5 },
            hidden: { opacity: 0, translateY: 0 },
          }}
          className="container"
        >
          <h1 className="is-huge">Work</h1>
          {projects.map((project, index) => (
            <WorkRow
              key={index}
              title={project.title}
              description={project.description}
              type={project.type}
              link={project.link}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default WorkPage

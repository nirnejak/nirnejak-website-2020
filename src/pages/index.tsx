import * as React from "react"

import ContactSection from "../components/sections/ContactSection"
import HeroSection from "../components/sections/HeroSection"
import RecentBlogs from "../components/sections/RecentBlogs"
import RecentWork from "../components/sections/RecentWork"
import Skills from "../components/sections/SkillsSection"
import SEO from "../components/seo"

export const Head: React.FC = () => {
  return <SEO title="Home" />
}

const IndexPage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <RecentBlogs />
      <Skills />
      <RecentWork />
      <ContactSection />
    </>
  )
}

export default IndexPage

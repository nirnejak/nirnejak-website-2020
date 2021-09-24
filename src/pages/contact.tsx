import * as React from "react"

import Header from "../components/header"
import ContactSection from "../components/sections/ContactSection"
import SEO from "../components/seo"

const ContactPage: React.FC = () => {
  return (
    <>
      <SEO title="Contact" />
      <Header />
      <ContactSection />
    </>
  )
}

export default ContactPage

import * as React from "react"

import ContactSection from "../components/sections/ContactSection"
import SEO from "../components/seo"

const ContactPage: React.FC = () => {
  return (
    <>
      <SEO title="Contact" />
      <ContactSection />
    </>
  )
}

export default ContactPage

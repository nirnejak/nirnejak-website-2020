import * as React from "react"

import ContactSection from "../components/sections/ContactSection"
import SEO from "../components/seo"

export const Head: React.FC = () => {
  return <SEO title="Contact" />
}

const ContactPage: React.FC = () => {
  return <ContactSection />
}

export default ContactPage

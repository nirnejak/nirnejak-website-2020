import React, { FC, ReactElement } from "react"

import Header from "../components/header"
import ContactSection from "../components/sections/ContactSection"
import SEO from "../components/seo"

const ContactPage: FC = (): ReactElement => {
  return (
    <>
      <SEO title="Contact" />
      <Header />
      <ContactSection />
    </>
  )
}

export default ContactPage

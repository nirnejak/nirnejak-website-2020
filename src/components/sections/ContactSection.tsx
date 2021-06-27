import * as React from "react"

import Fade from "react-reveal/Fade"

type ContactFormInput = {
  name: string
  email: string
  message: string
}

const ContactSection: React.FC = (): React.ReactElement => {
  const handleSubmit = async (e: any) => {
    e.preventDefault()

    const contactFormData: ContactFormInput = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    }

    const response = await fetch("/api/contact", {
      body: JSON.stringify(contactFormData),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
    const data = await response.json()

    console.log(data)
  }

  return (
    <section className="hero is-medium">
      <div className="hero-body">
        <div className="container">
          <h2 className="is-huge">Contact</h2>
          <br />
          <br />
          <Fade>
            <div
              className="is-raised has-text-centered"
              style={{
                borderRadius: "0.5em",
                padding: "50px 20px 40px 20px",
              }}
            >
              <form
                name="contact"
                method="post"
                action="/thanks/"
                onSubmit={handleSubmit}
              >
                <div>
                  <input type="text" name="name" id="name" placeholder="Name" />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <textarea name="message" id="message" placeholder="Message" />
                </div>
                <br />
                <div>
                  <button type="submit">SEND</button>
                </div>
              </form>
              <br />
              <br />
              <br />
              <p className="is-size-3 has-text-black has-text-weight-bold">
                or reach me at
              </p>
              <p className="is-size-3 has-text-black has-text-weight-light">
                hello@nirnejak.com
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  )
}

export default ContactSection

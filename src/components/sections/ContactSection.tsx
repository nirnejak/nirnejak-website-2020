import * as React from "react"

import { useForm, ValidationError } from "@formspree/react"
import Fade from "react-reveal/Fade"

const ContactSection: React.FC = () => {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM)

  return (
    <section className="hero is-medium">
      <div className="hero-body">
        <div className="container">
          <h2 className="is-huge">Contact</h2>
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
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
                <div>
                  <textarea name="message" id="message" placeholder="Message" />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>
                <br />
                <div>
                  <button type="submit" disabled={state.submitting}>
                    SEND
                  </button>
                </div>
                <ValidationError errors={state.errors} />
              </form>
              <br />
              <br />
              <br />
              <p className="is-size-3 has-text-black has-text-weight-bold">
                or reach me at
              </p>
              <a
                href="mailto:hello@nirnejak.com&subject=Website%20Enquiry"
                className="link is-size-3 has-text-weight-light"
              >
                hello@nirnejak.com
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  )
}

export default ContactSection

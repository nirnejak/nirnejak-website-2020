import React from "react"
import Fade from "react-reveal/Fade"

const ContactSection = () => {
  return (
    <section className="hero is-fullheight">
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
                data-netlify="true"
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
                <input type="hidden" name="form-name" value="contact" />
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

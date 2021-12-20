import * as React from "react"
import { useInView } from "react-intersection-observer"

import { navigate } from "gatsby"

import { useForm, ValidationError } from "@formspree/react"
import { motion, useAnimation } from "framer-motion"

const ContactSection: React.FC = () => {
  const [state, handleSubmit] = useForm("xgerdbkz")
  const controls = useAnimation()
  const [ref, inView] = useInView()

  React.useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  React.useEffect(() => {
    if (state.succeeded) {
      navigate("/thanks/")
    }
  }, [state.succeeded])

  return (
    <section className="hero is-medium">
      <div className="hero-body">
        <div className="container">
          <h2 className="text-9xl pb-10 font-bold">Contact</h2>
          <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.3 }}
            variants={{
              visible: { opacity: 1, translateY: -5 },
              hidden: { opacity: 0, translateY: 0 },
            }}
            className="is-raised text-center"
            style={{
              borderRadius: "0.5em",
              padding: "100px 20px",
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
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="font-bold bg-white text-black tracking-widest"
                >
                  SEND
                </button>
              </div>
              <ValidationError errors={state.errors} />
            </form>
            <br />
            <br />
            <br />
            <p className="text-3xl text-white font-bold">or reach me at</p>
            <a
              href="mailto:hello@nirnejak.com&subject=Website%20Enquiry"
              className="link text-3xl font-light"
            >
              hello@nirnejak.com
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection

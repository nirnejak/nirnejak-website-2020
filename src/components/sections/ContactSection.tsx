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
    <section className="mt-24">
      <div className="container">
        <h2 className="text-9xl text-gray-500 pb-10 font-bold">Contact</h2>
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          transition={{ duration: 0.3 }}
          variants={{
            visible: { opacity: 1, translateY: -5 },
            hidden: { opacity: 0, translateY: 0 },
          }}
          className="is-raised text-center rounded-lg py-24"
        >
          <form
            name="contact"
            method="post"
            action="/thanks/"
            onSubmit={handleSubmit}
          >
            <div>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className="bg-zinc-800 p-5 text-white rounded-lg mb-5 w-96"
              />
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
                className="bg-zinc-800 p-5 text-white rounded-lg mb-5 w-96"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div>
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                className="bg-zinc-800 p-5 text-white rounded-lg mb-5 w-96"
              />
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
                className="font-bold bg-white text-black tracking-widest rounded-lg p-5 mb-5 w-96"
              >
                SEND
              </button>
            </div>
            <ValidationError errors={state.errors} />
          </form>
          <br />
          <br />
          <br />
          <p className="text-3xl text-white font-bold mb-5">or reach me at</p>
          <a
            href="mailto:hello@nirnejak.com&subject=Website%20Enquiry"
            className="text-3xl text-gray-500"
          >
            hello@nirnejak.com
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection

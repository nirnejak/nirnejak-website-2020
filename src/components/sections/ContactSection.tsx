import * as React from "react"
import { useInView } from "react-intersection-observer"

import { navigate } from "gatsby"

import { motion, useAnimation } from "framer-motion"
import useSound from "use-sound"

import thunkSfx from "../../sounds/thunk.wav"

const ContactSection: React.FC = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView()
  const [play] = useSound(thunkSfx)

  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [state, setState] = React.useState<{
    name: string
    email: string
    message: string
  }>({ name: "", email: "", message: "" })

  React.useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    const response = await fetch("https://formspree.io/f/xgerdbkz", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(state),
    })
    const data = await response.json()
    setIsSubmitting(false)

    if (data.ok) {
      navigate("/thanks/")
    }
  }

  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <h2 className="is-huge">Contact</h2>
          <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.3 }}
            variants={{
              visible: { opacity: 1, translateY: -5 },
              hidden: { opacity: 0, translateY: 0 },
            }}
            className="is-raised has-text-centered"
            style={{
              borderRadius: "0.5em",
              padding: "60px 20px",
            }}
          >
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={state.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={state.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  name="message"
                  value={state.message}
                  onChange={handleChange}
                />
              </div>
              <br />
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  onClick={() => play()}
                >
                  {isSubmitting ? "SENDING..." : "SEND"}
                </button>
              </div>
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
              jeetnirnejak@gmail.com
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection

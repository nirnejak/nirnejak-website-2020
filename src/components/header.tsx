import * as React from "react"

import { Link } from "gatsby"

import { motion } from "framer-motion"

import "./header.scss"

type HeaderProps = {
  isDark: boolean
  toggleIsDark: any
}

const Header: React.FC<HeaderProps> = ({ isDark, toggleIsDark }) => {
  const [isExpanded, setExpanded] = React.useState(false)

  React.useEffect(() => {
    if (isExpanded) {
      document.body.style.overflowY = "hidden"
    } else {
      document.body.style.overflowY = "visible"
    }
  }, [isExpanded])

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-container">
          <div className="navbar-toggle-menu">
            {isExpanded ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="has-text-black has-cursor-pointer"
                onClick={() => setExpanded(false)}
              >
                <path d="M20 20L4 4m16 0L4 20" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="has-text-black has-cursor-pointer"
                onClick={() => setExpanded(true)}
              >
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            )}
          </div>
          <motion.div
            className={`navbar-links ${isExpanded ? "is-visible" : ""}`}
            initial={{ opacity: 0, translateY: -10 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Link
              to="/"
              className="navbar-link"
              onClick={() => setExpanded(false)}
            >
              Home
            </Link>
            <Link
              to="/blogs/"
              className="navbar-link"
              onClick={() => setExpanded(false)}
            >
              Blogs
            </Link>
            <a
              href="https://github.com/nirnejak/"
              className="navbar-link"
              onClick={() => setExpanded(false)}
              rel="noreferrer"
              target="_blank"
            >
              Projects
            </a>
            <Link
              to="/uses/"
              className="navbar-link"
              onClick={() => setExpanded(false)}
            >
              Uses
            </Link>
            <Link
              to="/contact"
              className="navbar-link"
              onClick={() => setExpanded(false)}
            >
              Contact
            </Link>
          </motion.div>
          <div className="navbar-toggle-theme">
            {/* {isDark ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                strokeWidth="2"
                className="has-text-black has-cursor-pointer"
                onClick={toggleIsDark}
              >
                <path d="M20.958 15.325c.204-.486-.379-.9-.868-.684a7.684 7.684 0 0 1-3.101.648c-4.185 0-7.577-3.324-7.577-7.425a7.28 7.28 0 0 1 1.134-3.91c.284-.448-.057-1.068-.577-.936C5.96 4.041 3 7.613 3 11.862 3 16.909 7.175 21 12.326 21c3.9 0 7.24-2.345 8.632-5.675z" />
                <path d="M15.611 3.103c-.53-.354-1.162.278-.809.808l.63.945a2.332 2.332 0 0 1 0 2.588l-.63.945c-.353.53.28 1.162.81.808l.944-.63a2.332 2.332 0 0 1 2.588 0l.945.63c.53.354 1.162-.278.808-.808l-.63-.945a2.332 2.332 0 0 1 0-2.588l.63-.945c.354-.53-.278-1.162-.809-.808l-.944.63a2.332 2.332 0 0 1-2.588 0l-.945-.63z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                strokeWidth="2"
                className="has-text-black has-cursor-pointer"
                onClick={toggleIsDark}
              >
                <path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10z" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 1a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1zM3.293 3.293a1 1 0 0 1 1.414 0l1.5 1.5a1 1 0 0 1-1.414 1.414l-1.5-1.5a1 1 0 0 1 0-1.414zm17.414 0a1 1 0 0 1 0 1.414l-1.5 1.5a1 1 0 1 1-1.414-1.414l1.5-1.5a1 1 0 0 1 1.414 0zM1 12a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1zm19 0a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1zM6.207 17.793a1 1 0 0 1 0 1.414l-1.5 1.5a1 1 0 0 1-1.414-1.414l1.5-1.5a1 1 0 0 1 1.414 0zm11.586 0a1 1 0 0 1 1.414 0l1.5 1.5a1 1 0 0 1-1.414 1.414l-1.5-1.5a1 1 0 0 1 0-1.414zM12 20a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1z"
                />
              </svg>
            )} */}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header

import * as React from "react"

import { Link } from "gatsby"

import "./header.scss"

const Header: React.FC = () => {
  const [isExpanded, setExpanded] = React.useState(false)
  const [isDark, setIsDark] = React.useState(true)

  // const setDark = () => {
  //   sessionStorage.setItem("isDark", "true")
  //   const root: HTMLElement = document.querySelector(":root")
  //   root.style.setProperty("--color-body-background", "#1e1e20")
  //   root.style.setProperty("--color-text-large", "rgba(255, 255, 255, 0.2)")
  //   root.style.setProperty("--color-link", "#ffffff")
  //   root.style.setProperty("--color-darkest", "#ffffff")
  //   root.style.setProperty("--color-lightest", "#000000")
  //   root.style.setProperty(
  //     "--box-shadow-primary",
  //     "14px 14px 29px #181819, -14px -14px 29px #242427"
  //   )
  //   root.style.setProperty(
  //     "--box-shadow-input",
  //     "inset 7px 7px 10px #1a1a1b, inset -7px -7px 10px #232325"
  //   )
  // }

  // const setLight = () => {
  //   sessionStorage.setItem("isDark", "false")
  //   const root: HTMLElement = document.querySelector(":root")
  //   root.style.setProperty("--color-body-background", "#fafafa")
  //   root.style.setProperty("--color-text-large", "rgba(0, 0, 0, 0.1)")
  //   root.style.setProperty("--color-link", "#000000")
  //   root.style.setProperty("--color-darkest", "#000000")
  //   root.style.setProperty("--color-lightest", "#ffffff")
  //   root.style.setProperty(
  //     "--box-shadow-primary",
  //     "7px 7px 10px rgba(0, 0, 0, 0.05), -7px -7px 10px #ffffff"
  //   )
  //   root.style.setProperty(
  //     "--box-shadow-input",
  //     "inset 7px 7px 10px rgba(0, 0, 0, 0.05), inset -7px -7px 10px #ffffff"
  //   )
  // }

  // React.useEffect(() => {
  //   if (sessionStorage.getItem("isDark") === "false") {
  //     setIsDark(false)
  //     setLight()
  //   } else {
  //     setIsDark(true)
  //     setDark()
  //   }
  // }, [])

  const toggleIsDark = () => {
    setIsDark(!isDark)
  }

  // React.useEffect(() => {
  //   if (isDark) {
  //     setDark()
  //   } else {
  //     setLight()
  //   }
  // }, [isDark])

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
          <div className={`navbar-links ${isExpanded ? "is-visible" : ""}`}>
            <Link to="/" className="navbar-link">
              Home
            </Link>
            <Link to="/blogs/" className="navbar-link">
              Blogs
            </Link>
            <Link to="/uses/" className="navbar-link">
              Uses
            </Link>
            <a
              href="https://github.com/nirnejak/"
              className="navbar-link"
              rel="noreferrer"
              target="_blank"
            >
              Projects
            </a>
            <Link to="/contact" className="navbar-link">
              Contact
            </Link>
          </div>
          <div className="navbar-toggle-theme">
            {isDark ? (
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
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header

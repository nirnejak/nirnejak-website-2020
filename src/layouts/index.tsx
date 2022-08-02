import * as React from "react"

import Background from "../components/atoms/Background"
import Footer from "../components/footer"
import Header from "../components/header"

import "../scss/main.scss"

type Props = {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
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

  // React.useEffect(() => {
  //   if (isDark) {
  //     setDark()
  //   } else {
  //     setLight()
  //   }
  // }, [isDark])

  const toggleIsDark = () => {
    setIsDark(!isDark)
  }

  return (
    <main>
      <Header isDark={isDark} toggleIsDark={toggleIsDark} />
      {children}
      <Footer />
      <Background />
    </main>
  )
}

export default Layout

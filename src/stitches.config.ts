import { createStitches } from "@stitches/react"

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      $primary: "#027bff",
      $text: "797979",
      $light: "#e0e0e0",

      $inputBorder: "--color-input-border",

      $darkest: "#000000",
      $darkestDark: "#ffffff",

      $lightest: "#ffffff",
      $lightestDark: "#000000",

      $largeText: "rgba(0, 0, 0, 0.1)",
      $largeTextDark: "rgba(255, 255, 255, 0.2)",

      $bodyBackground: "#fafafa",
      $bodyBackgroundDark: "#1e1e20",

      $boxShadowPrimary:
        "7px 7px 10px rgba(0, 0, 0, 0.05), -7px -7px 10px #ffffff",
      $boxShadowPrimaryDark: "14px 14px 29px #181819, -14px -14px 29px #242427",

      $boxShadowInput:
        "inset 7px 7px 10px rgba(0, 0, 0, 0.05), inset -7px -7px 10px #ffffff",
      $boxShadowInputDark:
        "inset 7px 7px 10px #1a1a1b, inset -7px -7px 10px #232325",
    },
    sizes: {
      $text: "13px",

      $1: "0.25rem",
      $2: "0.5rem",
      $3: "0.75rem",
      $4: "1rem",
      $5: "1.25rem",
      $6: "1.5rem",
      $7: "1.75rem",
      $8: "2rem",
      $9: "2.25rem",
      $10: "2.5rem",
      $11: "2.75rem",
      $12: "3rem",
    },
  },
  media: {
    sm: "(max-width: 640px)",
    md: "(max-width: 1024px)",
  },
  utils: {
    marginX: (value) => ({ marginLeft: value, marginRight: value }),
  },
})

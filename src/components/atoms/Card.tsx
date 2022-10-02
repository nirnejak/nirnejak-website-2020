import React from "react"

import { styled } from "../../stitches.config"

const StyledCard = styled("div", {
  padding: "1rem",
  borderRadius: "0.5rem",
  lineHeight: 1.6,

  backgroundColor: "var(--color-body-background)",
  boxShadow: "var(--box-shadow-primary)",

  "&:hover": {
    boxShadow: "none",
    transition: "all 0.3s ease-in",
  },

  a: {
    color: "var(--color-link)",
    textDecoration: "none",
  },
})

const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <StyledCard>{children}</StyledCard>
}

export default Card

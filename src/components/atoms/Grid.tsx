import React from "react"

import { styled } from "../../stitches.config"

const StyledGrid = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "2rem",

  width: "100%",
  margin: "0 auto",

  "@md": {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  "@sm": {
    gridTemplateColumns: "repeat(1, 1fr)",
  },
})

const Grid: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <StyledGrid>{children}</StyledGrid>
}

export default Grid

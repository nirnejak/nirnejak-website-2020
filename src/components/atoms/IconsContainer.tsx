import React from "react"

import { styled } from "../../stitches.config"

const StyledIconsContainer = styled("div", {
  display: "flex",
  justifyContent: "flex-start",
  flexWrap: "wrap",

  width: "100%",
  margin: "0 auto",
})

const IconsContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <StyledIconsContainer>{children}</StyledIconsContainer>
}

export default IconsContainer

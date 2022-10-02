import React from "react"

import { styled } from "../../stitches.config"

type ProjectType = {
  title: string
  description: string
  link?: string
  type: string
}

const StyledWorkRow = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 60,

  "&hover": {
    backgroundColor: "red",
  },
})

const WorkRow: React.FC<ProjectType> = ({ title, description, link, type }) => {
  return (
    <StyledWorkRow>
      <div>
        <h2 className="is-size-2 has-text-black">{title}</h2>
        <br />
        <p className="is-size-3 has-text-weight-light">{description}</p>
      </div>
      <div className="has-text-right">
        <p className="has-text-weight-bold has-text-primary">{type}</p>
        <br />
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="link is-size-3"
          >
            Link
          </a>
        )}
      </div>
    </StyledWorkRow>
  )
}

export default WorkRow

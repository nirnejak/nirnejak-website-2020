import React from 'react'

function footer() {
  return (
    <div className="has-text-centered" style={{ margin: "200px 10px" }}>
      <div className="is-size-3 has-text-weight-bold has-text-black">Follow Me on</div>

      <div style={{ margin: "30 0px" }}>
        <svg width="64" height="5" viewBox="0 0 64 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="64" height="5" fill="#027BFF" />
        </svg>
      </div>

      <div className="icons-container" style={{ justifyContent: "center", flexWrap: "wrap" }}>
        <div className="icon-container">
          <a href="https://github.com/nirnejak/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-2x fa-github" />
          </a>
        </div>
        <div className="icon-container">
          <a href="https://codepen.io/nirnejak" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-2x fa-codepen" />
          </a>
        </div>
        <div className="icon-container">
          <a href="https://www.dribbble.com/nirnejak/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-2x fa-dribbble" />
          </a>
        </div>
        <div className="icon-container">
          <a href="https://www.behance.net/nirnejak" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-2x fa-behance-square" />
          </a>
        </div>
        <div className="icon-container">
          <a href="https://www.linkedin.com/in/nirnejak/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-2x fa-linkedin" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default footer

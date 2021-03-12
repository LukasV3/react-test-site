import React from "react"
import "./styles.scss"

const ProgressBar = ({ value, target }) => {
  return (
    <div className="progress-bar">
      <div className="progress-bar__body">
        <div className="progress-bar__fill"></div>
        <div className="progress-bar__cover"></div>
      </div>
    </div>
  )
}

export default ProgressBar

import React from "react"
import "../styles/index.scss"

import Banner from "../components/Banner/Banner"
import ProgressBar from "../components/ProgressBar/ProgressBar"

const IndexPage = () => {
  return (
    <div className="app-container">
      <Banner />
      <ProgressBar value={0} target={300} />
    </div>
  )
}

export default IndexPage

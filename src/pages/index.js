import React from "react"
import "../styles/index.scss"

import Banner from "../components/Banner/Banner"
import ProgressBar from "../components/ProgressBar/ProgressBar"

const IndexPage = () => {
  return (
    <>
      <div className="header"></div>
      <div className="app-container">
        <Banner />
        <ProgressBar value={100} target={300} />
      </div>
      <div className="footer"></div>
    </>
  )
}

export default IndexPage

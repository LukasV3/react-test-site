import React from "react"
import "./styles.scss"

import HeaderImage from "../../assets/images/header-image.png"

const Header = () => {
  return (
    <div>
      <p className="hero-section">
        More cash in your wallet from everyday shopping
      </p>
      <img src={HeaderImage} alt="Site Dashboard"></img>
    </div>
  )
}

export default Header

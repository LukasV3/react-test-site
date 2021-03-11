import React from "react"
import "./styles.scss"

import HeaderImage from "../../assets/images/header-image.png"

const Header = () => {
  return (
    <div className="header">
      <p>More cash in your wallet from everyday shopping</p>
      <img src={HeaderImage} alt="Site Dashboard"></img>
      <button>Activate Now</button>
      <div></div>
    </div>
  )
}

export default Header

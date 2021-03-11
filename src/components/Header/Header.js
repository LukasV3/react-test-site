import React from "react"
import "./styles.scss"

import HeaderImage from "../../assets/images/header-image.png"
import ArrowRight from "../../assets/svgs/arrow.svg"
import Wallet from "../../assets/svgs/wallet.svg"

const Header = () => {
  return (
    <div className="header">
      <div className="header__content">
        <h5 className="header__title">Welcome Heather</h5>
        <p className="header__header">
          More cash in your wallet from everyday shopping
        </p>
        <p className="header__description">
          Shop for things you'd buy anyway with over 3,000 brands - online and
          in store - and watch the cash stack up in your wallet.
        </p>
        <button className="header__btn">
          <span className="header__btn--text">Activate now</span>
          <img
            className="header__btn--icon"
            src={ArrowRight}
            alt="Arrow right"
          ></img>
        </button>
      </div>

      <div className="gauge">
        <div className="gauge__body">
          <div className="gauge__fill"></div>
          <div className="gauge__cover"></div>
        </div>
      </div>
    </div>
  )
}

export default Header

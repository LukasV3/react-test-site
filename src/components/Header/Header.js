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
          More cash in your wallet<br></br> from everyday shopping
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

        {/* <div className="header__img--div">
          <img
            className="header__img"
            src={HeaderImage}
            alt="User dashboard"
          ></img>
        </div> */}
      </div>
    </div>
  )
}

export default Header

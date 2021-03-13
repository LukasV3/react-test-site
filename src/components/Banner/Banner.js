import React from "react"
import "./styles.scss"

import ArrowRight from "../../assets/svgs/arrow.svg"

const Banner = ({ firstName }) => {
  return (
    <div className="banner">
      <h5 className="banner__title">Welcome {firstName}</h5>
      <p className="banner__header">
        More cash in your wallet from everyday shopping
      </p>
      <p className="banner__description">
        Shop for things you'd buy anyway with over 3,000 brands - online and in
        store - and watch the cash stack up in your wallet.
      </p>
      <button className="banner__btn">
        <span className="banner__btn--text">Activate now</span>
        <img
          className="banner__btn--icon"
          src={ArrowRight}
          alt="Arrow right"
        ></img>
      </button>
    </div>
  )
}

export default Banner

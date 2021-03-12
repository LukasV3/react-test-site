import React from "react"
import "./styles.scss"

import Wallet from "../../assets/svgs/wallet.svg"

const ProgressBar = ({ value, target }) => {
  return (
    <div className="progress-bar">
      <div className="progress-bar__body">
        <div className="progress-bar__fill"></div>
        <div className="progress-bar__cover"></div>
      </div>
      <div className="progress-bar__display">
        <img
          className="progress-bar__display--icon"
          src={Wallet}
          alt="Wallet"
        ></img>
        <p className="progress-bar__display--value">
          £{value}
          <span>.00</span>
        </p>
        <p className="progress-bar__display--target">Goal: £{target}</p>
      </div>
    </div>
  )
}

export default ProgressBar

import React from "react"
import "./styles.scss"

import Wallet from "../../assets/svgs/wallet.svg"

const ProgressBar = ({ value, target }) => {
  const renderWalletValue = () => {
    let [pounds, pence] = value.toString().split(".")

    pence = !pence ? "00" : pence

    return (
      <p className="progress-bar__display--value">
        £{pounds}
        <span>.{pence.padStart(2, 0)}</span>
      </p>
    )
  }

  return (
    <div className="progress-bar">
      <div className="progress-bar__body">
        <div
          className="progress-bar__fill"
          style={{ width: `${(value / target) * 100}%` }}
        ></div>
        <div className="progress-bar__cover"></div>
      </div>
      <div className="progress-bar__display">
        <img
          className="progress-bar__display--icon"
          src={Wallet}
          alt="Wallet"
        ></img>
        {renderWalletValue()}
        <p className="progress-bar__display--target">Goal: £{target}</p>
      </div>
    </div>
  )
}

export default ProgressBar

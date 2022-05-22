import React from 'react'
import './donate.scss'
import TitleDesc from '../title-desc/TitleDesc';

const Donate = () => {
  return (
    <div className="donate container-sm">
      <TitleDesc
        text="11. DONATE"
        title="Donate to Support Development"
        desc="Lymcoin is not a pre-mined coin,
        so all of its development is funded by kind people like you."
      />
      <div className="donate__cards">
        <div className="donate__card">
          <div className="donate__card-logo">
            <img src="/assets/ethereum.svg" alt="ethereum"/>
          </div>
          <div className="donate__card-texts">
            <p className="donate__card-code">177r3vCAH3AzABiQjFPmcrSCp6TDzEDuB1</p>
            <p className="donate__card-add">Lymcoin Wallet Address</p>
          </div>
          <div className="donate__card-barcode">
            <img src="/assets/barcode.svg" alt="Barcode"/>
          </div>
        </div>
        <div className="donate__card">
          <div className="donate__card-logo">
            <img src="/assets/bitcoin.svg" alt="bitcoin"/>
          </div>
          <div className="donate__card-texts">
            <p className="donate__card-code">177r3vCAH3AzABiQjFPmcrSCp6TDzEDuB1</p>
            <p className="donate__card-add">Lymcoin Wallet Address</p>
          </div>
          <div className="donate__card-barcode">
            <img src="/assets/barcode.svg" alt="Barcode"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Donate
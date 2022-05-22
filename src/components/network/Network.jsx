import React from 'react'
import './network.scss'
import TitleDesc from '../title-desc/TitleDesc';

const Network = () => {
  return (
    <div className="network">
      <div className="network__content container-sm">
        <TitleDesc
          title="Growing Global Network"
          text="05. NETWORK"
          desc="Lymcoin is rapidly gaining popularity among crypto community.
          Lots of real companies and exchanges have adopted our coin already.
          There is much more to come. Stay tuned."
        />
        <div className="network__numbers">
          <div className="network__number">
            <p>50<span>+</span></p>
            <p className="network__number-small">Exchanges</p>
          </div>
          <div className="network__number">
            <p>180<span>+</span></p>
            <p className="network__number-small">Exchanges</p>
          </div>
        </div>
        <div className="network__logos">
          <div className="network__logo">
            <img src="/assets/network.svg" alt="Network"/>
          </div>
          <div className="network__logo">
            <img src="/assets/network2.svg" alt="Network"/>
          </div>
          <div className="network__logo">
            <img src="/assets/network3.svg" alt="Network"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Network
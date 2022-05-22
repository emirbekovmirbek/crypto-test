import React from 'react'
import TitleDesc from '../title-desc/TitleDesc';
import Card from '../wallets/card/Card';
import './miner.scss'

const cards = [
  {
    'title': 'Windows Lymcoin Miner',
    'download': 'Download',
    'image': '/assets/windows-8.svg'
  },
  {
    'title': 'Linux Lymcoin Miner',
    'download': 'Download',
    'image': '/assets/linux.svg'
  },
]
const Miner = () => {
  return (
    <div className="miner">
      <div className="container-sm miner__wrapper">
        <div className="miner__left">
          <TitleDesc
            text="09. MINER"
            title="Compatible GPU Miner Software"
            desc="Download one of these miners for your GPU"
          />
          <div className="miner__list">
            {
              cards.map((item, idx) => <Card card={item} key={idx} schema="black"/>)
            }
          </div>
          <div className="miner__texts">
            <div>
              <p className="miner__numb">
                87 278
              </p>
              <p>Total miners</p>
            </div>
            <div>
              <p className="miner__numb">
                2.82 Tsol/s
              </p>
              <p>Total miners</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Miner
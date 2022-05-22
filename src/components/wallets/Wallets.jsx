import React from 'react'
import './wallets.scss'
import TitleDesc from '../title-desc/TitleDesc';
import Button from '../button/Button';
import Card from './card/Card';

const cards = [
  {
    'title': 'Android Lymcoin Wallet',
    'download': 'Download',
    'image': '/assets/android.svg'
  },
  {
    'title': 'OSX Lymcoin Wallet',
    'download': 'Download',
    'image': '/assets/apple.svg'
  },
  {
    'title': 'Windows Lymcoin Wallet',
    'download': 'Download',
    'image': '/assets/windows-8.svg'
  },
  {
    'title': 'Linux Lymcoin Wallet',
    'download': 'Download',
    'image': '/assets/linux.svg'
  }
]

const Wallets = () => {

  return (
    <div className="wallets container">
      <div className="wallets__image">
        <img src="/assets/wallets.png" alt="Wallets"/>
      </div>
      <div className="wallets__right">
        <TitleDesc text="06. WALLETS" title="Lymcoin Wallets"/>
        <div className="wallets__buttons">
          <Button/>
          <Button schema="white"/>
          <Button schema="white"/>
          <Button schema="white"/>
        </div>
        <div className="wallets__cards">
          {
            cards.map((item, idx) => <Card card={item} key={idx}/>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Wallets;
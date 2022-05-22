import React from 'react';
import './mobile-menu.scss'
import Button from '../button/Button';

const links = [
  '/assets/twitter.svg',
  '/assets/facebook.svg',
  '/assets/youtube.svg',
  '/assets/skype.svg',
  '/assets/pinterest.svg',
]

const MobileMenu = ({open, onClose}) => {
  return (
    <div className={`mobile-menu ${open && 'mobile-menu--open'}`}>
      <div className="mobile-menu__wrapper">
        <div className="mobile-menu__close"  onClick={onClose}>
          <img src="/assets/btn-close.svg" alt=""/>
        </div>
        <div className="mobile-menu__logo">
          <img src="/assets/logo-mobile.svg" alt="Logo"/>
        </div>
        <ul className="mobile-menu__menu">
          <li className="mobile-menu__item"><a className="mobile-menu__link" href="#">home</a></li>
          <li className="mobile-menu__item"><a className="mobile-menu__link" href="#">resources</a></li>
          <li className="mobile-menu__item"><a className="mobile-menu__link" href="#">team</a></li>
          <li className="mobile-menu__item"><a className="mobile-menu__link" href="#">community</a></li>
          <li className="mobile-menu__item"><a className="mobile-menu__link" href="#">downloads</a></li>
          <Button schema="blue"/>
        </ul>
        <ul className="mobile-menu__socials">
          {
            links.map((item, idx) =>
              <li className="mobile-menu__social" key={idx}>
                <a  className="mobile-menu__social-logo" href="#">
                  <img src={item} alt="Link"/>
                </a>
              </li>)
          }
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
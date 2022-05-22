import React from 'react';
import css from './header.module.scss'
import Button from '../button/Button';
import Line from '../line/Line';
import MobileMenu from '../mobile-menu/MobileMenu';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <div className={css.header}>
      <nav className={`${css.header__menu} container`}>
        <div className={css.header__logo}>
          <a href="#">
            <img src="/assets/header-logo.png" alt="Logo"/>
          </a>
        </div> 
        <ul className={css.header__list}>
          <li className={css.header__item}><a className={css.header__link} href="#">home</a></li>
          <li className={css.header__item}><a className={css.header__link} href="#">resources</a></li>
          <li className={css.header__item}><a className={css.header__link} href="#">team</a></li>
          <li className={css.header__item}><a className={css.header__link} href="#">community</a></li>
          <li className={css.header__item}><a className={css.header__link} href="#">downloads</a></li>
          <Button schema="blue"/>
        </ul>
        <div className={css.header__burger} onClick={() => setIsOpen(prev => !prev)}>
          <img src="/assets/burger.svg" alt="Burger-menu"/>
        </div>
      </nav>
      <div className={`${css.header__content} container`}>
        <h1 className={css.header__title}>Secure and Anonymous
          Cryptocurrency </h1>
        <Line/>
        <p className={css.header__text}>
          Lymcoin is a decentralized, hybrid blockhain
          that is fully open-source.
        </p>
        <div className={css.header__actions}>
          <Button/>
          <Button schema="dark"/>
        </div>
      </div>
      <MobileMenu open={isOpen} onClose={() => setIsOpen(false)}/>
    </div>
  );
};

export default Header;
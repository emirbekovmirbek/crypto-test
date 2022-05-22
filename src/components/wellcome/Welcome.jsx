import React from 'react';
import css from './welcome.module.scss'
import TitleDesc from '../title-desc/TitleDesc';
import Button from '../button/Button';

const Welcome = ({image, imageName, button ,classes}) => {
  return (
    <div className={`${css.welcome} ${css[`welcome--${classes}`]}`}>
      <div className={`${css.welcome__image} container-sm`}>
        <img src={image} alt={imageName}/>
      </div>
      <div className={`${css.welcome__right} container-sm`}>
        <TitleDesc
          title="Lymcoin is Digital Cash
           You Can Spend
           Anywhere"
          desc="Use Lymcoin to make instant, private payments online or
          in-store using our secure open-source platform hosted by thousands of users around the world."
          text="01. WELCOME"
        />
        {button &&  <div className="welcome__btn">
          <Button/>
        </div>
        }
      </div>
    </div>
  );
};

export default Welcome;
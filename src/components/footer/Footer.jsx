import React from 'react';
import './footer.scss'
import Button from '../button/Button';
import Line from '../line/Line';

const links = [
  '/assets/twitter.svg',
  '/assets/facebook.svg',
  '/assets/youtube.svg',
  '/assets/skype.svg',
  '/assets/pinterest.svg',
]
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <h2 className="footer__content-title">
          I’d Like to Learn More
          About Lymcoin
        </h2>
        <Line/>
        <form className="footer__content-form">
          <div>
          <input type="text" className="footer__content-input" placeholder="Enter your Email" />
          <Button text="Sign in"/>
          </div>
          <div className="footer__content-checkbox">
            <label>
              <input type="checkbox"/>
            </label>
            <span>I have read and agree to the terms & conditions</span>
          </div>

        </form>
        <ul className="footer__links">
          {
            links.map((item, idx) =>
              <li className="footer__link" key={idx}>
                <a  className="footer__link-logo" href="#">
                  <img src={item} alt="Link"/>
                </a>
              </li>)
          }
        </ul>
        <p className="footer__text">AncoraThemes © 2019. All Rights Reserved.</p>
      </div>
      <div className="footer__btn-up">
        <img src="/assets/arrow-up.svg" alt="Up"/>
      </div>
    </footer>
  );
};

export default Footer;
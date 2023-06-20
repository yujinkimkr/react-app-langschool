import React from 'react';
import classes from './Footer.module.scss';
import Global from '../../images/global.svg';
import insta from '../../images/instagram.png';
import facebook from '../../images/facebook.png';

const Footer = () => {
  return <div className={classes.footer__container}>
    <div className={classes.footer__inner}><img src={Global} alt="Global icon" /></div>
    <div className={classes.footer__inner}>
      <h2>GET HELP</h2>
      <p>Contact Us</p>
      <p>Latest Articles</p>
      <p>FAQ</p>
    </div>
    <div className={classes.footer__inner}>
      <h2>PROGRAMS</h2>
      <p>Korean for Beginners</p>
      <p>Fun Fun Learning by Korean Drama</p>
      <p>Studying by Korean TED</p>
      <p>Pronunciation </p>
    </div>
    <div className={classes.footer__inner}>
      <h2>CONTACT US</h2>
      <p>Address : Gdynia, Poland</p>
      <p>Email: kadza.koreanski@gmail.com</p>
      <a href="https://www.instagram.com/kadza.koreanski/">
        <p className={classes.sns}>
          <img style={{ 'width': '20px' }} src={insta} alt="facebook icon" />
          <span> &nbsp; @kadza.koreanski</span>
        </p>
      </a>
      <p>
        <img style={{ 'width': '20px' }} src={facebook} alt="facebook icon" />
      </p>
    </div>
  </div >
}

export default Footer;
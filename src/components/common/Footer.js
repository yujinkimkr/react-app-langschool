import React from 'react';
import classes from './Footer.module.scss';
import Global from '../../images/global.svg';
import insta from '../../images/instagram.png';
import facebook from '../../images/facebook.png';

const Footer = () => {
  const copyHandler = (textToCopy) => {
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        alert('The email address is copied.');
      })
      .catch((error) => {
        console.error('Failed to copy:', error);
      });
  }

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
      <p>Korean for Beginners </p>
      <p>Fun Fun Learning by Korean Drama</p>
      <p>Studying by Korean TED 'Sebasi Talk'</p>
      <p>pronunciation correction</p>
    </div>
    <div className={classes.footer__inner}>
      <h2>CONTACT US</h2>
      <p>Address : Gdansk, Poland</p>
      <p className={classes.email} onClick={() => { copyHandler('kadza.koreanski@gmail.com') }}>Email: kadza.koreanski@gmail.com</p>
      <a href="https://www.instagram.com/kadza.koreanski/">
        <p className={classes.sns}>
          <img style={{ 'width': '20px' }} src={insta} alt="instagram icon" />
          <span> &nbsp; @kadza.koreanski</span>
        </p>
      </a>
      <p className={classes.sns}>
        <img style={{ 'width': '20px' }} src={facebook} alt="facebook icon" />
        <span> &nbsp; <a href="https://www.facebook.com/profile.php?id=100093814483039">Go To 'Kadza Koreański'</a></span>
      </p>
    </div>
  </div>
}

export default Footer;
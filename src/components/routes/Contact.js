import React from 'react';
import Top from '../common/Top';
import classes from './Contact.module.scss';
const Contact = (props) => {
  return <React.Fragment>
    <Top title="Contact" imgName="contact" />
    <div className={classes.contact__container}>
      <ul>
        <li><img src={require('../../images/loc.svg').default} alt="location" /></li>
        <li>VISIT US</li>
        <li>GDYNIA, MOSTY</li>
      </ul>
      <ul>
        <li><img src={require('../../images/email.svg').default} alt="email" /></li>
        <li>EMAIL US</li>
        <li>kadza.koreanski@gmail.com</li>
      </ul>
      <ul>
        <li><img src={require('../../images/phone.svg').default} alt="phone" /></li>
        <li>CALL US</li>
        <li>+48 666 360 277</li>
      </ul>
    </div>
  </React.Fragment>
}

export default Contact;
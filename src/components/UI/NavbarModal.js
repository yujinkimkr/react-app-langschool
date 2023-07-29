import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavbarModal.module.scss';
const NavbarModal = ({ onMenuSwitch, onShowNavbar }) => {
  const toggleSwitchHandler = () => {
    onMenuSwitch();
  }
  return (
    <div className={`${styles.navbar__modal} ${onShowNavbar ? styles.showNavbar : ''}`}>
      <ul>
        <Link to="/"><li onClick={toggleSwitchHandler}>HOME</li></Link>
        <Link to="/about"><li onClick={toggleSwitchHandler}>ABOUT</li></Link>
        <Link to="/courses"><li onClick={toggleSwitchHandler}>COURSES</li></Link>
        <Link to="/register"><li onClick={toggleSwitchHandler}>REGISTER</li></Link>
        <Link to="/contact"><li onClick={toggleSwitchHandler}>CONTACT</li></Link>
      </ul>
    </div>)
    ;
}

export default NavbarModal;
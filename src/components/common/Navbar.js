import logo_r from '../../images/logo_kadza.png';
import { Link } from "react-router-dom";
import classes from './Navbar.module.scss';

const Navbar = () => {
  return <div className={classes.nav__bar}>
    <div className={classes.nav__logo}>
      <img className={classes.logo} src={logo_r} alt="Logo" />
    </div>
    <ul className={classes.nav__menu}>
      <Link to="/"><li>Home</li></Link>
      <Link to="/about"><li>About</li></Link>
      <Link to="/courses"><li>Courses</li></Link>
      <Link to="/register"><li>Register</li></Link>
      <Link to="/contact"><li>Contact</li></Link>
    </ul>
  </div>
}

export default Navbar;

import main_logo from '../../images/logo_kadza.png';
import { Link } from "react-router-dom";
import classes from './Navbar.module.scss';
import menu from '../../images/menu.png';

const Navbar = () => {
  return <div className={classes.nav__bar}>
    <div className={classes.nav__logo}>
      <Link to="/">
        <img className={classes.logo} src={main_logo} alt="Logo" />
      </Link>
      <img id={classes.menu__bar} src={menu} alt="menu bar" />
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

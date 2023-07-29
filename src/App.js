import { useState } from 'react';
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from "./components/routes/Home";
import About from "./components/routes/About";
import Courses from "./components/routes/Courses";
import Contact from "./components/routes/Contact";
import Register from "./components/routes/Register";
import NavbarModal from './components/UI/NavbarModal';
import { Routes, Route } from 'react-router-dom';
import styles from './App.module.scss';
// import styles from './App.module.scss';

function App() {
  const [navbarToggle, setNavbarToggle] = useState(false);

  const menuSwitchHandler = () => {
    setNavbarToggle((prev) => !prev);
  }
  const toggleBarHandler = () => {
    setNavbarToggle((prev) => !prev);
  }
  let heightOfNav = '';
  const checkNavHeightHandler = (navHeight) => {
    heightOfNav = navHeight + 'px';
    console.log(heightOfNav);
  }

  return (

    //  style={{ overflow: navbarToggle ? 'display' : 'hidden'}}

    <div className={styles.app}>
      <Navbar onToggleClick={toggleBarHandler} onCheckNavHeight={checkNavHeightHandler}/>

      {navbarToggle &&
        <NavbarModal onMenuSwitch={menuSwitchHandler} onShowNavbar={true} />
      }  

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

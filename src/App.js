import { useState } from 'react';
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from "./components/routes/Home";
import About from "./components/routes/About";
import Courses from "./components/routes/Courses";
import Contact from "./components/routes/Contact";
import Register from "./components/routes/Register";
import Modal from './components/UI/Modal';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [navbarToggle, setNavbarToggle] = useState(false);

  const menuSwitchHandler = (value) => {
    if (!value) {
      setNavbarToggle(value);
    }
  }
  const toggleBarHandler = (toggleState) => {
    setNavbarToggle(toggleState);
  }

  return (
    <div className="App">
      <Navbar onToggleClick={toggleBarHandler} />
      {navbarToggle &&
        <Modal onMenuSwitch={menuSwitchHandler} />
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

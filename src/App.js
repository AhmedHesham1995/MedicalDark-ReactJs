
import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import NavBar from './components/NavBar/NavBar';
import Home from './components/pages/Home';
import Footer from './components/Footer/Footer';
import Contact from './components/pages/Contact';
import Services from './components/pages/Services';
import './App.css';

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <>
      <NavBar />
      <div className={`theme-toggle ${isDarkTheme ? 'dark' : 'light'}`} onClick={toggleTheme}>
        <FontAwesomeIcon icon={isDarkTheme ? faMoon : faSun} />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

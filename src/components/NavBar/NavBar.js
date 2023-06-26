
import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faSearch } from '@fortawesome/free-solid-svg-icons';
import './NavBar.css';
import logo from '../../assets/logo.png';

function NavBar({ isDarkTheme }) {

  const handleNavClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navBarClass = isDarkTheme ? 'dark' : '';

  return (
    <Navbar expand="lg" fixed="top" className={navBarClass}>
      <Container>
        <Navbar.Brand>
          <NavLink to="/" className="link" onClick={handleNavClick}>
            <img src={logo} alt="logo" />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink
              to="/"
              className="link"
              onClick={handleNavClick}
            >
              Home
            </NavLink>
            <NavLink
              to="/services"
              className="link"
              onClick={handleNavClick}
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              className="link"
              onClick={handleNavClick}
            >
              Contact us
            </NavLink>
            <Nav.Link href="#search">
              <FontAwesomeIcon icon={faSearch} />
            </Nav.Link>
            <Nav.Link href="#search">
              <button>
                Contact us<span><FontAwesomeIcon icon={faArrowRight} /></span>
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

  
  
  

  
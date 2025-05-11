import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="w-100 px-4">
      <Navbar.Brand href="/">John DOE</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto text-uppercase">
          <NavLink className="nav-link" to="/">Accueil</NavLink>
          <NavLink className="nav-link" to="/services">Services</NavLink>
          <NavLink className="nav-link" to="/portfolio">Portfolio</NavLink>
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
          <NavLink className="nav-link" to="/mentions-legales">Mentions légales</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;

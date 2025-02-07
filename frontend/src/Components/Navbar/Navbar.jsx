// src/Components/Navbar/Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./navbar.css";
import 'boxicons';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Function to close the menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="navParent">
      <nav className="nav">
        {/* Logo as Home Button */}
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src="./images/logo.png" alt="Medha Logo" /> {/* Logo */}
          
        </Link>
        <span className="logo-text">Shree Devi Institute Of Technology</span> {/* Name/Title */}

        {/* Desktop Menu */}
        <div className="menu">
          <a href="/">Home</a>
          <a href="#about-section">About</a>
          <a href="#event-section">Events</a>
          <a href="#contact-section">Contact</a>
          <Link to="/register" className="reg">Register</Link> {/* Use Link for navigation */}
        </div>

        {/* Mobile Menu Icon */}
        <div className="mobile">
          <i className="bx bx-menu" onClick={toggleMenu}></i>
        </div>
      </nav>

      {/* Dropdown Menu for Mobile */}
      {isMenuOpen && (
        <div className="dropdown-menu">
          <Link to="/" onClick={closeMenu}>Home</Link>
          <a href="#about-section" onClick={closeMenu}>About</a>
          <a href="#event-section" onClick={closeMenu}>Events</a>
          <a href="#contact-section" onClick={closeMenu}>Contact</a>
          <Link to="/register" onClick={closeMenu}>Register</Link> {/* Use Link for navigation in dropdown */}
        </div>
      )}
    </div>
  );
};
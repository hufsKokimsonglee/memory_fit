import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <a href='/' className="header__logo">Onlu</a>
      <nav className="header__nav">
        <a href="/" className="header__link">Home</a>
        <a href="#about" className="header__link">About</a>
        <a href="#services" className="header__link">Services</a>
        <a href="#contact" className="header__link">Contact</a>
      </nav>
    </header>
  );
};

export default Header;

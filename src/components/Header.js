import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/gamewalkerscolorhor.png';
import '../styles/globals.css';

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Gamewalkers" />
      <div className="header-buttons">
        <Link to="/" className="button">Home</Link>
        <Link to="/new-video" className="button">Nuevo Video</Link>
      </div>
    </header>
  );
};

export default Header;

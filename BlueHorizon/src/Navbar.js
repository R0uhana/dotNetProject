import React from 'react';
import { NavLink } from 'react-router-dom';
import PopupDemo from './PopupDemo';

const Navbar = () => {
  return (
    <nav className="navbar">

      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink to="/" className="navbar-link">
            <img src={require("./logoNav.jpg")} className='logoNav' alt="" />
          </NavLink >
        </li>
      </ul>

      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink to="/packages" className="navbar-link">Packages</NavLink >
        </li>
        <li className="navbar-item">
          <NavLink to="/about" className="navbar-link">About</NavLink >
        </li>

        <li className="navbar-item">
          <NavLink to="/contact" className="navbar-link">Contact</NavLink >
        </li>
        <li className="navbar-item">
          <PopupDemo/>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

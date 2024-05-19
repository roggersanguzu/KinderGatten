import React from "react";
import Logo from '../../Assets/logo.jpeg'
import './Navbar.css'
const Navbar = () => {
  return (
    <nav className="container">
      <img src={Logo} className="logo"/>
      <ul>
        <li>Home</li>
        <li>Games</li>
        <li>About</li>
        <li>Administration</li>
        <li><button className="btn">Contact</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;



"use client";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import "./header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <header className={`header ${isOpen ? "open" : ""}`}>
      <div className="logo">
        <span>A</span>lishba
      </div>
      <ul className={`navlist ${isOpen ? "open" : ""}`}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#service">Service</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div id="menu-icon" onClick={toggleMenu}>
        <MdMenu />
      </div>
    </header>
  );
}

export default Header;

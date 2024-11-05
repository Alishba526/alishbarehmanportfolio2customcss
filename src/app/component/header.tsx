

"use client";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import "./header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={`header ${isOpen ? "open" : ""}`}>
      <div className="logo">
        <span>A</span>lishba
      </div>
      <ul className={`navlist ${isOpen ? "open" : ""}`}>
        <li>
          <a href="#" onClick={closeMenu}>Home</a>
        </li>
        <li>
          <a href="#about" onClick={closeMenu}>About</a>
        </li>
        <li>
          <a href="#service" onClick={closeMenu}>Service</a> {/* Updated link */}
        </li>
        <li>
          <a href="#skills" onClick={closeMenu}>Skills</a>
        </li>
        <li>
          <a href="#portfolio" onClick={closeMenu}>Portfolio</a>
        </li>
        <li>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </li>
      </ul>
      <div id="menu-icon" onClick={toggleMenu}>
        <MdMenu />
      </div>
    </header>
  );
}

export default Header;

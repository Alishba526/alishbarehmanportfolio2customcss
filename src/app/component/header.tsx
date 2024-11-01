// "use client";
// import { useState } from "react";
// import { MdMenu } from "react-icons/md";
// import "./header.css";
// import Link from "next/link";

// function Header() {
//   const [isOpen, setIsOpen] = useState(false); // State for toggling the menu

//   const toggleMenu = () => {
//     setIsOpen(!isOpen); // Toggle menu open/close
//   };

//   return (
//     <main>
//       <header>
//         <div className="logo">
//           <span>A</span>lishba
//         </div>
//         {/* Conditional class for menu */}
//         <ul className={`navlist ${isOpen ? "open" : ""}`}>
//           <li>
//             <a href="/">Home</a>
//           </li>
//           <li>
//             <Link href="/about">About</Link>
//           </li>
//           <li>
//             <a href="/service">Service</a>
//           </li>
//           <li>
//             <a href="#skills">Skills</a>
//           </li>
//           <li>
//             <a href="#portfolio">Portfolio</a>
//           </li>
//           <li>
//             <a href="#contact">Contact</a>
//           </li>
//         </ul>
//         {/* Menu icon for toggling menu */}
//         <div id="menu-icon" onClick={toggleMenu}>
//           <MdMenu />
//         </div>
//       </header>
//     </main>
//   );
// }

// export default Header;







"use client";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import "./header.css";
import Link from "next/link";

function Header() {
  const [isOpen, setIsOpen] = useState(false); // State for toggling the menu

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle menu open/close
  };

  return (
    <header className={`header ${isOpen ? "open" : ""}`}>
      <div className="logo">
        <span>A</span>lishba
      </div>
      {/* Nav List */}
      <ul className={`navlist ${isOpen ? "open" : ""}`}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <a href="/service">Service</a>
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
      {/* Menu Icon */}
      <div id="menu-icon" onClick={toggleMenu}>
        <MdMenu />
      </div>
    </header>
  );
}

export default Header;

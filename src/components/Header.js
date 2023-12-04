import React from 'react';

function Header() {
  return (
    <header>
      <div className="brand-name">婉煊教育</div>
      <nav>
        <li to="/"><a> Home </a> </li>
        <li to="/services"> <a>Services</a> </li>
        <li to="/about"> <a>About Us </a></li>
        <li to="/contact"> <a>Contact</a> </li>
      </nav>
    </header>
  );
}

export default Header;

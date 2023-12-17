import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear(); // Gets the current year

  return (
    <footer>
      <p>© {currentYear} 婉煊教育</p>
      <p>Contact Us: admin@wanxuaneducation.com</p>
    </footer>
  );
}

export default Footer;

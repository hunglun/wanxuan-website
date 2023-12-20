import React from 'react';

function Header(  {home, toggleActivityMenu }) {
  return (
    <header>
      <div className="brand-name">婉煊教育</div>
      <nav>
        <li onClick={home}>首页</li>
        {/* Attach the onClick event handler to this li */}
        <li onClick={toggleActivityMenu}>活动菜单</li>
      </nav>
    </header>
  );
}

export default Header;

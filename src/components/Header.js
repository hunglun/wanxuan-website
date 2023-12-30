import React from 'react';

function Header(  { selectPage }) {
  return (
    <header>
      <div className="brand-name">婉煊教育</div>
      <nav>
        <li onClick={() => selectPage(0)}>首页</li>
        {/* Attach the onClick event handler to this li */}
        <li onClick={() => selectPage(3)}>留学</li>
        <li onClick={() => selectPage(2)}>兴趣班</li>
        <li onClick={() => selectPage(1)}>游学活动</li>
  
      </nav>
    </header>
  );
}

export default Header;

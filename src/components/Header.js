import React from 'react';

function Header(  { selectPage }) {
  return (
    <header>
      <div className="brand-name">婉煊教育</div>
      <nav>
        <li onClick={() => selectPage(0)}>首页</li>
        {/* Attach the onClick event handler to this li */}
        <li onClick={() => selectPage(3)}><button disabled>留学</button></li>
        <li onClick={() => selectPage(2)}><button disabled>兴趣班</button></li>
        <li onClick={() => selectPage(1)}>游学活动</li>
  
      </nav>
    </header>
  );
}

export default Header;

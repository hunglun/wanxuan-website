// ActivityMenu.js
import React from 'react';
import attractions from './attractions.js'; // Adjust the path as necessary

function ActivityMenu() {
  return (
    <div>
      <h2>活动菜单</h2>
      <ul>
        {attractions.map((attraction, index) => (
          <li key={index}>
            <a href={attraction.url} target="_blank" rel="noopener noreferrer">
             {index + 1} {attraction.name} 
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ActivityMenu;

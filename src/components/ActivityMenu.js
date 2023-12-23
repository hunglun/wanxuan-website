// ActivityMenu.js
import React from 'react';
import attractions from './attractions.js'; // Adjust the path as necessary
import './ActivityMenu.css';
function ActivityMenu() {
  return (
    <div>
      <h1>活动菜单</h1>
      <ul>
        {attractions.map((attraction, index) => (
          <li key={index}>
            <div class="image-container">
              <img src={ process.env.PUBLIC_URL + '/' + attraction.image} alt={attraction.name} />
              <div class="overlay-text">
                <a href={attraction.url} target="_blank" rel="noopener noreferrer">
                 {index + 1} {attraction.name} 
                </a>
              </div>
            </div>
        
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ActivityMenu;

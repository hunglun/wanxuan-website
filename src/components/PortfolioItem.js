// PortfolioItem.js

import React from 'react';

const PortfolioItem = ({ title, description, mp3Url }) => {
  return (
    <div className="portfolio-item">
      <h3>{title}</h3>
      <p>{description}</p>
      <audio controls>
        <source src={mp3Url} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default PortfolioItem;

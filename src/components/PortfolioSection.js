// PortfolioSection.js

import React from 'react';
import PortfolioItem from './PortfolioItem'; // Import the PortfolioItem component
import confession_of_love from '../assets/confession_of_love.mp3';
const PortfolioSection = () => {
  // Define your portfolio items
  const portfolioItems = [
    {
      title: '官宣脱单',
      description: '二零二三年十一月十八日晚上直播',
      mp3Url: confession_of_love,
    },
    // Add more items as needed
  ];

  return (
    <div className="portfolio-section">
      <h2>Portfolio</h2>
      <div className="portfolio-list">
        {portfolioItems.map((item, index) => (
          <PortfolioItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioSection;

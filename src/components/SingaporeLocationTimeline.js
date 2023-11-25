// App.js
import React from 'react';
import LocationTimeline from './LocationTimeline';
import './SingaporeLocationTimeline.css';

function SingaporeLocationTimeline() {
  // Example data - replace this with your actual data
  const locations = [
    { name: '樟宜机场', date: '2024-01-22', background: '#3498db', url : 'https://www.changiairport.com' },
    { name: '滨海湾花园', date: '2024-01-23 上午' , background: '#2ecc71', url:'https://www.gardensbythebay.com.sg'},
    { name: '万象馆， 手工制作', date: '2024-01-23 下午' , background: '#3498db', url :'https://www.madametussauds.com/singapore' },

    // Add more locations as needed
  ];

  return (
    <div className="app">
      <LocationTimeline locations={locations} />
    </div>
  );
}

export default SingaporeLocationTimeline;

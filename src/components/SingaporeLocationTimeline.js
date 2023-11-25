// App.js
import React from 'react';
import LocationTimeline from './LocationTimeline';
import './SingaporeLocationTimeline.css';

function SingaporeLocationTimeline() {
  // Example data - replace this with your actual data
  const locations = [
    { name: '樟宜机场', date: '2024-01-22', background: '#3498db' , className: 'vertical-timeline-element--education'},
    { name: '滨海湾花园', date: '2024-01-23 上午' , background: '#2ecc71', className: 'vertical-timeline-element--work'},
    { name: '万象馆， 手工制作', date: '2024-01-23 下午' , background: '#3498db',className: 'vertical-timeline-element--education'},

    // Add more locations as needed
  ];

  return (
    <div className="app">
      <LocationTimeline locations={locations} />
    </div>
  );
}

export default SingaporeLocationTimeline;

// App.js
import React from 'react';
import LocationTimeline from './LocationTimeline';
import './SingaporeLocationTimeline.css';

function SingaporeLocationTimeline() {
  // Example data - replace this with your actual data
  const locations = [
    { name: '樟宜机场', date: '2024-01-22',  url : 'https://www.changiairport.com' },
    { name: '滨海湾花园', date: '2024-01-23 上午' ,  url:'https://www.gardensbythebay.com.sg'},
    { name: '万象馆， 手工制作', date: '2024-01-23' ,  url :'https://www.madametussauds.com/singapore' },
    { name: '鱼尾狮', date: '2024-01-23' ,  url :'https://www.madametussauds.com/singapore' },
    { name: '滨海湾金沙', date: '2024-01-23' ,  url :'https://www.madametussauds.com/singapore' },
    { name: '风动飞行', date: '2024-01-24' ,  url :'https://www.madametussauds.com/singapore' },
    { name: '新加坡游船', date: '2024-01-24' ,  url :'https://www.madametussauds.com/singapore' },
    { name: '夜间动物园', date: '2024-01-24' ,  url :'https://www.madametussauds.com/singapore' },
    { name: '圣淘沙', date: '2024-01-25' ,  url :'https://www.madametussauds.com/singapore' },
    { name: '小印度', date: '2024-01-25' ,  url :'https://www.madametussauds.com/singapore' },
    { name: '牛车水', date: '2024-01-25' ,  url :'https://www.madametussauds.com/singapore' },
    { name: '摩天轮', date: '2024-01-25' ,  url :'https://www.madametussauds.com/singapore' },
    { name: '科学馆', date: '2024-01-26' ,  url :'https://www.madametussauds.com/singapore' },
    { name: '樟宜机场', date: '2024-01-26' ,  url :'https://www.madametussauds.com/singapore' },

    // Add more locations as needed
  ];

  return (
    <div className="app">
      <LocationTimeline locations={locations} />
    </div>
  );
}

export default SingaporeLocationTimeline;

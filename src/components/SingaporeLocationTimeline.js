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
    { name: '鱼尾狮', date: '2024-01-23' ,  url :'https://www.visitsingapore.com.cn/see-do-singapore/recreation-leisure/viewpoints/merlion-park/' },
    { name: '滨海湾金沙', date: '2024-01-23' ,  url :'https://zh.marinabaysands.com' },
    { name: '风动飞行', date: '2024-01-24' ,  url :'https://www.iflysingapore.com/activity-to-do-in-singapore/?gad_source=1&gclid=CjwKCAiA04arBhAkEiwAuNOsIgDqVc08q0BkHy1tm-x7FDFXNUmUeEPuv9CBzCQMrg46jyigvhAKRxoCAo4QAvD_BwE' },
    { name: '新加坡游船', date: '2024-01-24' ,  url :'https://www.visitsingapore.com.cn/see-do-singapore/recreation-leisure/fun-things-to-do/singapore-river-bumboat/' },
    { name: '夜间动物园', date: '2024-01-24' ,  url :'https://www.mandai.com/zh/night-safari.html' },
    { name: '圣淘沙', date: '2024-01-25' ,  url :'https://www.sentosa.com.sg/' },
    { name: '小印度', date: '2024-01-25' ,  url :'https://www.visitsingapore.com/see-do-singapore/places-to-see/little-india/' },
    { name: '牛车水', date: '2024-01-25' ,  url :'https://www.visitsingapore.com.cn/see-do-singapore/places-to-see/chinatown/' },
    { name: '摩天轮', date: '2024-01-25' ,  url :'https://www.singaporeflyer.com/cn' },
    { name: '科学馆', date: '2024-01-26' ,  url :'https://www.science.edu.sg' },
    { name: '星耀樟宜(樟宜机场)', date: '2024-01-26' ,  url :'https://www.jewelchangiairport.com/en.html' },

    // Add more locations as needed
  ];

  return (
    <div className="app">
      <LocationTimeline locations={locations} />
    </div>
  );
}

export default SingaporeLocationTimeline;

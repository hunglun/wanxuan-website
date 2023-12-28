import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel CSS

import './HeroSection.css';
import hindutemple from '../assets/hindu-temple-performance-1mb.jpg';
import skatepark from '../assets/skateboard-park.jpg'
import riflerangepark from '../assets/rifle-range-park.jpeg'
function HeroSection() {
  return (
    <div className="hero-section">
       <Carousel 
         interval={3000} // Images will change every 3000 milliseconds (3 seconds)
         showThumbs={false}
         showArrows={true} autoPlay={true} infiniteLoop={true}>
          <div>
            <img src={hindutemple} alt="Performance in Hindu Temple" />
          </div>
          <div>
            <img src={skatepark} alt="Lakeside Skateboard Park" />
          </div>
          <div>
            <img src={riflerangepark} alt="Rifle Range Park" />
          </div>
          
          {/* Add more images as needed */}
        </Carousel>
        <h1>探索，学习，在我们独特的教育冒险中成长！</h1>
        <h2>为6-12岁儿童提供丰富的海外旅程</h2>  
        
        <div className="call-us"><a href="mailto:admin@wanxuaneducation.com" className="call-button">今天就开始您孩子的冒险吧！ </a></div>
    </div>
  );
}

export default HeroSection;

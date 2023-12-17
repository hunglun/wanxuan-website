import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel CSS

import './HeroSection.css';
import pic from '../assets/profile_pic.jpeg';
function HeroSection() {
  return (
    <div className="hero-section">
       <Carousel showArrows={true} autoPlay={true} infiniteLoop={true}>
          <div>
            <img src={pic} alt="Children in Educational Activity" />
          </div>
          <div>
            <img src={pic} alt="Children Enjoying Singapore Trip" />
          </div>
          {/* Add more images as needed */}
        </Carousel>
        <h1>Explore, Learn, and Grow with Our Unique Educational Adventures!</h1>
        <h2>Enriching Journeys for 6-12 Year Olds</h2>
      
    </div>
  );
}

export default HeroSection;

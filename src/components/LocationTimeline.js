// LocationTimeline.js
import React from 'react';
// import './LocationTimeline.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const color1 = '#2ecc71'
const color2 = '#3498db'
const LocationTimeline = ({ locations }) => {
  return (
    <VerticalTimeline>
    <div className="timeline">
      {locations.map((location, index) => (
        
          
         <VerticalTimelineElement
         contentStyle={{ background: (index % 2 === 0 ) ? color2 : color1, color: '#fff' }}
         contentArrowStyle={{ borderRight: '7px solid  ' + (index % 2 === 0 ) ? color2 : color1 }}
         iconStyle={{ background: (index % 2 === 0 ) ? color2 : color1, color: '#fff' }}
         icon={<i className={location.className} />}
         link={location.url}
       >
        <a href={location.url}>  <h3 className="vertical-timeline-element-title">{index + 1} {location.name}</h3>
        </a>
        
         <p>
         {location.date}
         </p>
         <p>待定</p>
         
         
         </VerticalTimelineElement>
   
      ))}
    </div>
    </VerticalTimeline>
  );
};

export default LocationTimeline;

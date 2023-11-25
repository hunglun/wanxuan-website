import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const TimelineComponent = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#3498db', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #3498db' }}
        date="2010 - 2014"
        iconStyle={{ background: '#3498db', color: '#fff' }}
        icon={<i className="fa fa-database" />}
      >
        <h3 className="vertical-timeline-element-title">Software Engineer</h3>
        <p>
          Worked on various projects, gaining experience in database design and backend development.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: '#2ecc71', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #2ecc71' }}
        date="2014 - 2016"
        iconStyle={{ background: '#2ecc71', color: '#fff' }}
        icon={<i className="fa fa-graduation-cap" />}
      >
        <h3 className="vertical-timeline-element-title">Master's Degree</h3>
        <p>Completed Master's in Computer Science with a focus on machine learning.</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: '#2ecc71', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #2ecc71' }}
        date="2014 - 2016"
        iconStyle={{ background: '#2ecc71', color: '#fff' }}
        icon={<i className="fa fa-graduation-cap" />}
      >
        <h3 className="vertical-timeline-element-title">Master's Degree</h3>
        <p>Completed Master's in Computer Science with a focus on machine learning.</p>
      </VerticalTimelineElement>
      {/* Add more timeline elements as needed */}

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: '#2ecc71', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #2ecc71' }}
        date="2014 - 2016"
        iconStyle={{ background: '#2ecc71', color: '#fff' }}
        icon={<i className="fa fa-graduation-cap" />}
      >
        <h3 className="vertical-timeline-element-title">Master's Degree</h3>
        <p>Completed Master's in Computer Science with a focus on machine learning.</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default TimelineComponent;

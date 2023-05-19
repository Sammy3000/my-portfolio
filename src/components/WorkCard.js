import './WorkCard.css';
import React from 'react';
import proj1 from '../assets/coding.jpg';

const WorkCard = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        <div className="project-card">
          <img
            src={proj1}
            alt="project pic"
          />
        </div>
      </div>
    </div>
  );
};

export default WorkCard;

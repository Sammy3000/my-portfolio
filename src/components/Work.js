import './WorkCard.css';
import React from 'react';
import proj1 from '../assets/coding.jpg';
import { NavLink } from 'react-router-dom';

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        <div className="project-card"></div>
      </div>
    </div>
  );
};

export default Work;

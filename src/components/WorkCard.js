import './WorkCard.css';
import React from 'react';
import proj1 from '../assets/coding.jpg';
import { NavLink } from 'react-router-dom';

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
          <h2 className="project-title">Project Title</h2>
          <div className="project-details">
            <p> This is a description of my project</p>
            <div className="pro-buttons">
              <NavLink
                to="towettsammy.com"
                className="btn"
              >
                View
              </NavLink>
              <NavLink
                to="towettsammy.com"
                className="btn"
              >
                Source
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;

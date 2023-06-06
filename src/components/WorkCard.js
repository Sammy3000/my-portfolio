import './WorkCard.css';
import React from 'react';
import proj1 from '../assets/coding.jpg';
import { NavLink } from 'react-router-dom';

const WorkCard = (props) => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        <div className="project-card">
          <img
            src={props.imgsrc}
            alt="project pic"
          />
          <h2 className="project-title">{props.heading}</h2>
          <div className="project-details">
            <p>{props.description}</p>
            <div className="pro-buttons">
              <NavLink
                to="towettsammy.com"
                className="btn"
              >
                {props.view}
              </NavLink>
              <NavLink
                to="towettsammy.com"
                className="btn"
              >
                {props.source}
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;

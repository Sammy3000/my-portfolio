import './Heroimg.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Codingimg from '../assets/dev.jpg';

const Heroimg = () => (
  <div className="hero">
    <div className="mask">
      <img
        className="into-img"
        src={Codingimg}
        alt="Coding pic"
      />
    </div>
    <div className="content">
      <p>Hi, I am Sammy Towett</p>
      <h1>Front-End Developer</h1>
      <div>
        <Link
          to="/projects"
          className="btn"
        >
          Projects
        </Link>
        <Link
          to="/contact"
          className="btn btn-light"
        >
          Contact
        </Link>
      </div>
    </div>
  </div>
);

export default Heroimg;

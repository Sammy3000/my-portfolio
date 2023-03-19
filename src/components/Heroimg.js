import './Heroimg.css';
import React from 'react';
import Codingimg from '../assets/dev.jpg';
import { Link } from 'react-router-dom';

const Heroimg = () => {
  return (
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
        <h1>FullStack Developer</h1>
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
};

export default Heroimg;

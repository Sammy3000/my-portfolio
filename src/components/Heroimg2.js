import React from 'react';
import './Heroimg2.css';

const Heroimg2 = ({ heading, text }) => (
  <div className="hero-img">
    <div className="heading">
      <h1>{heading}</h1>
      <p>{text}</p>
    </div>
  </div>
);

export default Heroimg2;

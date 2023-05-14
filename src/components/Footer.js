import './Footer.css';
import React from 'react';
import {
  FaFacebook,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from 'react-icons/fa';

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="left">
        <div className="phone">
          <h3>
            {' '}
            <FaPhone
              size={20}
              style={{ color: '#fff', marginRight: '2rem' }}
            />
            +254 743793661
          </h3>
        </div>
        <div className="phone">
          <h4>
            <FaMailBulk
              size={20}
              style={{ color: '#fff', marginRight: '2rem' }}
            />
            towettsammy30@gmail.com
          </h4>
        </div>
      </div>
      <div className="right">
        <h3>About me</h3>
        <p>
          This is me, Sammy. Front-End Developer. I like discussing new projects
          and challenges
        </p>

        <div className="social">
          <FaFacebook
            size={30}
            style={{ color: '#fff', marginRight: '1rem' }}
          />
          <FaTwitter
            size={30}
            style={{ color: '#fff', marginRight: '1rem' }}
          />
          <FaLinkedin
            size={30}
            style={{ color: '#fff', marginRight: '1rem' }}
          />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

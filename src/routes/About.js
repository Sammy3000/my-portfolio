import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Heroimg2 from '../components/Heroimg2';

const About = () => (
  <div>
    <Navbar />
    <Heroimg2
      heading="ABOUT."
      text="I'm a friendly full-stack developer"
    />
    <Footer />
  </div>
);

export default About;

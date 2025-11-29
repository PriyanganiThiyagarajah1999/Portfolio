// src/components/About.tsx

import React from 'react';
import './about.css';
import prof from '../assets/prof2.png';
import resume from "../assets/resume.pdf"
const About: React.FC = () => {
  return (
    <div className="about-container">
      <div className="about-bio">
        <h2 className="about-greeting">Hello, I'm <b>Priyangani </b></h2>
        <p className="about-headline">
          A <strong>Full-Stack Software Engineer</strong> specializing in scalable, high-performance web applications.
        </p>

        {/* --- CONSOLIDATED BIO CONTENT --- */}
        <p>
          With deep expertise in <strong>Angular</strong> and <strong>React</strong> on the front end, my full-stack capabilities extend to building robust APIs using <strong>MEAN (Node.js/Express)</strong> and enterprise-level services with <strong>Spring Boot</strong>. I thrive on tackling application logic across both client and server environments.
        </p>
        <p>
          My focus is on delivering top-quality products by writing clean, efficient code, optimizing performance, and crafting seamless <strong>UI/UX designs</strong>. I am dedicated to creating intuitive and impactful digital experiences and actively seek roles where my dedication to clean architecture can deliver measurable results.
        </p>
        <div className="social-links">
          {/* Use icons here (e.g., from FontAwesome or Lucide) */}
          <a href="https://www.linkedin.com/in/priyangani-thiyagarajah-b8731738b/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/PriyanganiThiyagarajah1999" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a 
            href={resume}// Path starts with / to signify the root of the site
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-secondary"
          >
            Download CV
          </a>
        </div>
      </div>
      <div className="about-photo">
        {/* Placeholder for a professional image */}
        <img src={prof} alt="Your professional portrait" />
      </div>
    </div>
  );
};

export default About;
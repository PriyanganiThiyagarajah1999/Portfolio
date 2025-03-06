import React from 'react'
import Header from '../components/Header'
import './about.css'
import profileImg from "../assets/profile.png";
import Project from './Project';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';

const About= () => {
    return (
        <section id="about" className="about-section">
            <div className="about-container">
            {/* Left Side: About Text */}
            <div className="about-content">
            <h2>About Me</h2>
                <p>
                Hello! I'm Priyangani Thiyagarajah, a passionate Software Engineer specializing in web development. With expertise in Angular, 
                React, and modern front-end technologies, I thrive on building scalable, high-performance applications that enhance user 
                experiences.
                </p>
                <p>
                I focus on writing clean, efficient code, optimizing performance, and crafting seamless UI/UX designs to deliver 
                top-quality products. Whether developing responsive web applications or refining user interactions, 
                I’m dedicated to creating intuitive and impactful digital experiences.
                </p>
            </div>

            {/* Right Side: Profile Image */}
            <div className="about-image">
                <img src={profileImg} alt="Profile" />
            </div>
            </div>
            <Project />
            <Skills />
            <Contact />
            <Footer />
        </section>
    )
}

export default About;
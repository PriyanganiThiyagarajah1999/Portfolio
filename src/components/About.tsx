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
                Hello! I'm Priyangani Thiyagarajah, a passionate Software Engineer with experience in web development and a strong foundation in 
                Angular, React, and modern front-end technologies. I enjoy building scalable and user-friendly applications 
                that enhance user experiences.
                </p>
                <p>
                I specialize in crafting responsive, high-performance web applications. I focus on writing clean code, optimizing performance, 
                and designing seamless UI/UX to deliver top-quality products.
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
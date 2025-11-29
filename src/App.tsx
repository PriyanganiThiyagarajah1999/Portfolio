// src/App.tsx

import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css'; // For overall layout

const App: React.FC = () => {
  return (
    <div className="portfolio-app">
      <Header />
      <main>
        {/* Use IDs for smooth scrolling navigation */}
        <section id="about" className="section about-section">
          <About />
        </section>
        <section id="skills" className="section skills-section">
          <h2 className="section-title">Technical Expertise</h2>
          <Skills />
        </section>
        <section id="projects" className="section projects-section">
          <h2 className="section-title">Featured Work</h2>
          <Projects />
        </section>
        <section id="contact" className="section contact-section">
          <h2 className="section-title">Get in Touch</h2>
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
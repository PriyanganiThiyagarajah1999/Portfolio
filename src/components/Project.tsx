// src/components/Project.tsx

import React from 'react';
import './project.css';
// Ensure these images exist in your '../assets/' directory for the import to work
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png'; // This will be for Kerk Life Insurance
import img5 from '../assets/5.png'; // This will be for the new Chatbot project

// Define a professional Project type
interface Project {
  id: number;
  title: string;
  imageSrc: string; // Path to a high-quality image or GIF
  summary: string; // The one-sentence elevator pitch
  description: string; // Detailed case study
  techStack: string[]; // List of key technologies
  liveUrl?: string; // Made optional for projects that might not have a live demo
  repoUrl: string;
}

const featuredProjects: Project[] = [
  {
    id: 1,
    imageSrc: img1,
    title: 'Ecommerce Website (Zola Fashion)',
    summary: 'A full-featured e-commerce platform specializing in apparel and secure ordering.',
    description: "Developed an eCommerce website specializing in denim, offering a wide range of jeans, jackets, and other apparel. Features include high-quality product images, detailed descriptions, and easy buying. This project was built using **Angular** and **Spring Boot**.",
    techStack: [ 'HTML', 'CSS', 'PHP', 'MySQL'],
    liveUrl: '#', // Add a live demo URL if available
    repoUrl: "https://github.com/PriyanganiThiyagarajah1999/Zola-Fashion",
  },
  {
    id: 2,
    imageSrc: img2,
    title: 'Online Food Ordering System',
    summary: 'A system allowing users to browse menus, select items, and place orders with real-time tracking.',
    description: "Developed a robust food ordering system that allows users to browse menus, select items, and place orders with real-time tracking. This project highlights my proficiency in creating dynamic, responsive web applications.",
    techStack: ['Angular', 'Bootstrap 5', 'Spring Boot', 'MySQL'],
    liveUrl: '#',
    repoUrl: "https://github.com/PriyanganiThiyagarajah1999/food_order_system",
  },
  {
    id: 3,
    imageSrc: img3,
    title: 'Sri Lankan Currency Note Recognition (Final Year Project)',
    summary: 'Mobile application utilizing image processing for currency detection for visually impaired users.',
    description: "Developed a mobile application that identifies Sri Lankan currency notes using image processing. This complex project demonstrates strong skills in research, algorithms, and application development for social impact.",
    techStack: ['Python','Machine Learning', 'Flutter', 'Android Studio'],
    liveUrl: '#',
    repoUrl: "https://github.com/PriyanganiThiyagarajah1999/srilankan_currency_note_detector_app",
  },
  {
    id: 4,
    imageSrc: img4,
    title: 'Kerk Life Insurance Application', // The original 4th project
    summary: 'Comprehensive system for policy creation, management, and integrated secure payment capabilities.',
    description: "Developed a comprehensive life insurance system enabling policy creation and management, with integrated secure payment capabilities. This showcases experience with building reliable, data-sensitive applications.",
    techStack: ['Angular 16', 'Bootstrap 5', 'Rest API', 'IDIOM', 'JasperSoft'],
    liveUrl: '#',
    repoUrl: "https://github.com/PriyanganiThiyagarajah1999/kerk-life-insurance",
  },
  {
    id: 5, // This is the new 5th project
    imageSrc: img5, 
    title: 'AI-Powered Chatbot System',
    summary: 'A lightweight AI chatbot using TinyLlama and RAG for accurate, real-time conversational responses.',
    description: "Developed a lightweight AI chatbot using TinyLlama and a RAG pipeline to deliver accurate, real-time conversational responses. Integrated Flask (AI engine) with Express.js and MongoDB for API routing, data handling, and smooth web-based user interaction.",
    techStack: ['Python Flask', 'TinyLlama', 'RAG Pipeline', 'Transformers', 'Express.js', 'Node.js', 'MongoDB', 'Axios'],
    liveUrl: '#', // You can set this to undefined if there's no live demo
    repoUrl: "https://github.com/PriyanganiThiyagarajah1999/ChatBot", // **UPDATE THIS with your actual GitHub repo URL for the chatbot**
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section"> 
      <h2>My Portfolio Projects</h2>
      <div className="projects-container">
        {featuredProjects.map((project) => (
          <article key={project.id} className="project-card">
            <div className="project-image-wrapper">
              <img src={project.imageSrc} alt={`${project.title} screenshot`} className="project-image" />
            </div>
            <div className="project-details">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-summary">{project.summary}</p>
              
              <p className="project-description">{project.description}</p>
              
              <div className="tech-stack-list">
                {project.techStack.map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>

              <div className="project-links">
                {/* {project.liveUrl && ( // Conditionally render "View Live Demo" if liveUrl exists
                //   <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                //     View Live Demo
                //   </a>
                )} */}
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  Source Code
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
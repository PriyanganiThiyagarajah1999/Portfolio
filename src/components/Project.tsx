import React from 'react'
import Header from '../components/Header'
import './project.css'
import img1 from '../assets/1.png'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpeg'

const projects = [
    {
      id: 1,
      image: img1, 
      title: "Ecommerce Website ",
      title2: "( Zola Fashion )",
      description: "Developed an eCommerce website specializing in denim, offering a wide range of jeans, jackets, and other apparel. Features include high-quality product images, detailed descriptions, and easy buying.",
    },
    {
      id: 2,
      image: img2,
      title: "Online Food Ordering System",
      description: "Developed a food ordering system that allows users to browse menus, select items, and place orders with real-time tracking.",
    },
    {
      id: 3,
      image: img3,
      title: "Sri Lankan Currency Note Recognition for visually Impaired People",
      title2: "(final year project)",
      description: "Developed a mobile application that identifies Sri Lankan currency notes using image processing.",
    },
    {
      id: 4,
      image: img4,
      title: "Kerk Life Insurance Application",
      description: "Developed a comprehensive life insurance system enabling policy creation and management, with integrated secure payment capabilities.",
    },
];

const Project= () => {
     return (
    <section id="projects" className="project-section">
        
        <div className='project-container'>
            <h2 style={{ fontWeight:'bold'}}>My Projects</h2>
            <div className="project-content">
            {projects.map((project) => (
                <div className="card1" key={project.id}>
                <img src={project.image} alt={project.title} className="card-image" />
                <h5 style={{marginTop:'20px', fontWeight:'bold'}}>{project.title}</h5>
                <h5 style={{fontWeight:'bold'}}>{project.title2}</h5>
                <p>{project.description}</p>
                </div>
            ))}
            </div>
        </div>
    </section>
  )
}

export default Project;
import React, { useState, useRef } from 'react';
import Header from '../components/Header';
import './skills.css';
import img1 from '../assets/5.jpg';
import img2 from '../assets/6.jpg';
import img3 from '../assets/7.jpeg';
import img4 from '../assets/8.jpeg';
import img5 from '../assets/9.png';
import img6 from '../assets/10.jpg';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const skills = [
  { id: 1, image: img1, title: "Programming Languages", description: (
    <ul className='list'>
      <li>Java</li>
      <li>C++</li>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>TypeScript</li>
    </ul>
  )},
  { id: 2, image: img2, title: "Frameworks", description:(
    <ul className='list'>
      <li>Angular</li>
      <li>React</li>
      <li>Vue</li>
      <li>SpringBoot</li>
    </ul>
  ) },
  { id: 3, image: img3, title: "Databases", description: (
    <ul className='list'>
      <li>MySQL</li>
      <li>FireBase</li>
    </ul>
  ) },
  { id: 4, image: img5, title: "Version Control", description: (
    <ul className='list'>
      <li>SVN</li>
      <li>Git/ GitHub</li>
    </ul>
  )},
  { id: 5, image: img6, title: "IDEs", description: (
    <ul className='list'>
      <li>VS Code</li>
      <li>IntelliJ</li>
      <li>Eclipse</li>
      <li>Notepad++</li>
    </ul>
  )},
  { id: 6, image: img4, title: "API Testing Tools", description: (
    <ul>
      <li>Postman</li>
      <li>Insomnia</li>
    </ul>
  ) },
];

const Skills = () => {
  const [flippedSkill, setFlippedSkill] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      if (direction === "left") {
        current.scrollBy({ left: -300, behavior: "smooth" });
      } else {
        current.scrollBy({ left: 300, behavior: "smooth" });
      }
    }
  };

  const handleCardClick = (id: number) => {
    setFlippedSkill(id);
  };

  const handleBackToSkills = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    setFlippedSkill(null);
  };

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 style={{fontWeight:'bold'}}>My Skills</h2>
        
        {/* Show either the selected skill details or the list of skills */}
        <div className="scroll-buttons">
          <button onClick={() => scroll('left')} className="scroll-btn left"><FaChevronLeft /></button>
          <button onClick={() => scroll('right')} className="scroll-btn right"><FaChevronRight /></button>
        </div>

        <div className="skills-content" ref={scrollRef}>
          {skills.map((skill) => (
            <div
              className={`card1 ${flippedSkill === skill.id ? 'flipped' : ''}`}
              key={skill.id}
              onClick={() => handleCardClick(skill.id)}
            >
              <div className="card-inner">
                <div className="card-front">
                  <img src={skill.image} alt={skill.title} className="card-image" />
                  <h5 style={{margin:'10px', fontWeight:'bold'}}>{skill.title}</h5>
                </div>
                <div className="card-back" onClick={handleBackToSkills}>
                  <p>{skill.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

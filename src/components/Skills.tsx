// src/components/Skills.tsx

import React from 'react';
import './skills.css';

interface SkillGroup {
  category: string;
  skills: string[];
}

const developerSkills: SkillGroup[] = [
  // 1. Languages (Programming, Scripting, and Markup)
  {
    category: 'Programming & Markup Languages',
    skills: [
      'C++', 'Java', 'JavaScript', 'TypeScript', 'Python',
      'PHP', 'HTML5', 'CSS'
    ],
  },
  
  // 2. Frameworks & Back-End Runtimes
  {
    category: 'Frameworks & Libraries',
    skills: [
      'AngularJS', 'Angular', 'Bootstrap 5', 'React', 
      'Spring Boot', 'Node JS', 'Express JS', 'Flask'
    ],
  },
  
  // 3. Databases (Taken from your 'Languages' list for clarity)
  {
    category: 'Databases',
    skills: ['MySQL', 'MongoDB'],
  },
  
  // 4. Tools & DevOps (Consolidating Software, Version Control, and CI/CD)
  {
    category: 'Tools & DevOps',
    skills: [
      'Git', 'SVN', 'Jenkins', // Version Control & CI/CD
      'Figma', 'IDIOM', 'Postman', 'Insomnia', 'LM Studio', // Software & Testing
      'Grafana', 'JasperSoft', 'JIRA', 'RAG Pipeline' // Monitoring & Workflow
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <div className="skills-grid">
      {developerSkills.map((group) => (
        <div key={group.category} className="skill-group-card">
          <h3 className="skill-category-title">{group.category}</h3>
          <div className="skill-tags-container">
            {group.skills.map((skill) => (
              <span key={skill} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
// src/components/Skills.jsx
import React from 'react';

const skills = {
  frontend: [
    { name: 'HTML5', color: '#7BBBFF', width: '90%' },
    { name: 'CSS3', color: '#7BBBFF', width: '85%' },
    { name: 'JavaScript', color: '#7BBBFF', width: '75%' },
    { name: 'React', color: '#7BBBFF', width: '70%' },
  ],
  backend: [
    { name: 'Python', color: '#7BBBFF', width: '80%' },
    { name: 'NodeJS', color: '#7BBBFF', width: '70%' },
    { name: 'Java', color: '#7BBBFF', width: '65%' },
  ],
  softSkills: [
    { name: 'Communication', color: '#FFAA7B', width: '95%'},
    { name: 'Teamwork', color: '#FFAA7B', width: '85%'},
    { name: 'Problem Solving', color: '#FFAA7B', width: '90%'},
  ]
};

function Skills() {
  return (
    <section id="skills">
      <h1 className="sub-title">
        My <span>Skills</span>
      </h1>

      {/* Skills Categories in Horizontal Layout */}
      <div className="skills-categories">
        {/* Frontend Skills Category */}
        <div className="skills-category">
          <h3>Frontend</h3>
          <div className="container1">
            {skills.frontend.map((skill, index) => (
              <div className="bar" key={index}>
                <i
                  style={{ color: skill.color }}
                  className={`bx bxl-${skill.name.toLowerCase()}`}
                ></i>
                <div className="info">
                  <span>{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Backend Skills Category */}
        <div className="skills-category">
          <h3>Backend</h3>
          <div className="container1">
            {skills.backend.map((skill, index) => (
              <div className="bar" key={index}>
                <i
                  style={{ color: skill.color }}
                  className={`bx bxl-${skill.name.toLowerCase()}`}
                ></i>
                <div className="info">
                  <span>{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills Category */}
        <div className="skills-category">
          <h3>Soft Skills</h3>
          <div className="container1">
            {skills.softSkills.map((skill, index) => (
              <div className="bar" key={index}>
                <i
                  style={{ color: skill.color }}
                  className={`bx ${
                    skill.name === 'Communication' ? 'bx-message-square' :
                    skill.name === 'Teamwork' ? 'bx-group' :
                    skill.name === 'Problem Solving' ? 'bx-brain' :
                    `bxl-${skill.name.toLowerCase().replace(/\s+/g, '-')}`
                  }`}
                ></i>
                <div className="info">
                  <span>{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}

export default Skills;
// Compare this snippet from src/Components/Projects.jsx:
// // src/components/Projects.jsx
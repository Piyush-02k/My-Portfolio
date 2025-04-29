// src/components/Projects.jsx
import React from 'react'
import './Projects.css'

const projects = [
  {
    title: 'Heart Disease Prediction',
    link: 'https://github.com/Piyush-02k/Heart-Disease-Prediction-Using-ML-Algorithms.git',
    type: 'Research-based Major Project | KJSIT',
    date: 'June 2023 – April 2024',
    details: [
      'An accurate predictive model assessing heart disease risk based on health and lifestyle parameters.',
      'Conducted thorough analysis and interpretation of real-time datasets from a cardiology hospital.',
      'Used Decision Tree, Naïve Bayes, and Random Forest, Hybrid ML.'
    ]
  },
  {
    title: 'Web-RTC Real-time Voice Chat',
    link: '',
    type: 'Minor Project | KJSIT',
    date: 'February 2023',
    details: [
      'Real-time voice chat application using cutting-edge technologies.',
      'Applied DevOps methodology for seamless deployment and CI.',
      'Built with MERN stack, WebRTC, and Socket.io.'
    ]
  },
  {
    title: 'Jarvis Automated Voice Assistant',
    link: 'https://github.com/Piyush-02k/Jarvis-Automated-Task-Voice-Assistant.git',
    type: 'Self-Learning Project',
    date: 'May 2022',
    details: [
      'Automated voice assistant using Quepy, pyttsx3, and speech recognition.',
      'Interactive GUI, Voice Recognition, Command Processing.',
      'Built with Python, tkinter, pycache, pyttsx3.'
    ]
  },
  {
    title: 'Online Quiz Website',
    link: 'https://github.com/Piyush-02k/Online-Quiz-Website-for-KJSIT-Students.git',
    type: 'Minor Project | KJSIT',
    date: 'November 2022',
    details: [
      'Online quiz platform enhancing student engagement.',
      'Implemented at College Level for Internal Assessment.',
      'Fully Functional Admin Panel.',
      'Built with AngularJS, HTML, CSS, Spring Boot, MySQL, PHP.'
    ]
  },
  {
    title: 'Portfolio Website',
    type: 'Self-Learning Project',
    date: 'March 2021',
    details: [
      'An online portfolio showcasing development and design work.',
      'Built with HTML, CSS, JavaScript, Figma.'
    ]
  }
]

const Projects = () => {
  return (
    <section id="projects">
      <h1 className="sub-title">My <span>Projects</span></h1>
      <div className="projects-slider">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h2>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                  {project.title}
              </a>
            </h2>
            <h4>{project.type}</h4>
            <p className="date">{project.date}</p>
            <ul>
              {project.details.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
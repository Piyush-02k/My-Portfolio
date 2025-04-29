// src/components/About.jsx
import React from 'react'

function About() {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src="/profile.jpg" alt="Profile" />
      </div>
      <div className="about-text">
        <h2>About <span>Me</span></h2>
        <h4>Full Stack Developer</h4>
        <p>I am passionate about technology, building modern websites, and learning new technologies. Completed Graduation from K.J. Somaiya Institute of Technology.</p>
        <a href="#skills" className="btn-box">More About Me</a>
      </div>
    </section>
  )
}

export default About
// Compare this snippet from src/Components/Skills.jsx:
// // src/components/Skills.jsx
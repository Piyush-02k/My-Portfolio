// src/components/Header.jsx
import React from 'react'

function Header() {
  return (
    <header className="header">
      <a href="#home" className="logo">Portfolio.</a>
      <nav className="navbar">
        <a href="#home" style={{ '--i': 1 }} className="active">Home</a>
        <a href="#about" style={{ '--i': 2 }}>About</a>
        <a href="#skills" style={{ '--i': 3 }}>Skills</a>
        <a href="#projects" style={{ '--i': 4 }}>Projects</a>
        <a href="#contact" style={{ '--i': 5 }}>Contact</a>
      </nav>
    </header>
  )
}

export default Header
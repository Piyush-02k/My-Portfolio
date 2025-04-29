// src/components/Home.jsx
import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'

function Home() {
  const textRef = useRef(null)

  useEffect(() => {
    const typed = new Typed(textRef.current, {
      strings: ["Frontend Developer", "Web Developer", "Researcher", 'Data Science Enthusiast'],
      typeSpeed: 150,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    })

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hello, It's Me</h3>
        <h1>Piyush Kulkarni</h1>
        <h3>And I'm a <span className="highlight-text" ref={textRef}></span></h3>
        <p>Expert in website development, frontend technologies, and UI design.</p>
        <div className="home-sci">
          <a href="fb" target="_blank" rel="noopener noreferrer"><i className="bx bxl-facebook-circle"></i></a>
          <a href="https://www.instagram.com/_piyush.02k_/" target="_blank" rel="noopener noreferrer"><i className="bx bxl-instagram"></i></a>
          <a href=" https://wa.me/9834937811" target="_blank" rel="noopener noreferrer"><i className="bx bxl-whatsapp"></i></a>
          <a href="https://linkedin.com/in/-piyush02k-" target="_blank" rel="noopener noreferrer"><i className="bx bxl-linkedin-square"></i></a>
          <a href="https://github.com/Piyush-02k" target="_blank" rel="noopener noreferrer"><i className="bx bxl-github"></i></a>
        </div>
        <a href="#about" className="btn-box">More About Me</a>
      </div>
      <span className="home-imghover"></span>
    </section>
  )
}

export default Home

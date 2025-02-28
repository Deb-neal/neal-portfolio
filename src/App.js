import React from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Nav from './components/Nav/Nav.js';
import About from './components/About/About.js';
import Skills from './components/Skills/Skills.js';
import Projects from './components/Projects/Projects.js';
import Education from './components/Education/Education.js';
import Contact from './components/Contact/Contact.js';

function App() {
  console.log('test');
  return (
    <div id='page'>
      <div className='container-wrap'>
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Noto+Sans+KR:wght@400;700&display=swap'
          rel='stylesheet'
        />
        <Header />
        <Nav />
        <div id='colorlib-main'>
          <About />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;

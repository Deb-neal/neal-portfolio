import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className='home-container' data-section='home'>
      <div className='home-header'>
        <h1>Min su Ann</h1>
        <h2>Back-end Developer & System Architect</h2>
      </div>

      <div className='home-content'>
        <p>
          Passionate back-end developer with expertise in building robust,
          scalable server-side applications and APIs. Specializing in database
          design, system architecture, and performance optimization.
        </p>

        <div className='terminal-box'>
          <div className='command-line'>
            <span className='prompt'>minsu@server:~$</span>
            <span className='command'> whoami</span>
          </div>
          <div className='output'>
            Backend Developer with a focus on creating efficient, scalable
            systems
          </div>

          <div className='command-line'>
            <span className='prompt'>minsu@server:~$</span>
            <span className='command'> ls ./skills</span>
          </div>
          <div className='output'>
            Node.js Nest.js Express MongoDB MySQL Docker AWS RESTful API
          </div>

          <div className='command-line'>
            <span className='prompt'>minsu@server:~$</span>
            <span className='command'> cat ./current_status.txt</span>
          </div>
          <div className='output'>
            Building scalable solutions and microservices architecture
          </div>
        </div>

        <h3>Tech Stack</h3>
        <div className='tech-stack'>
          <div className='tech-item'>
            <i className='fa fa-server'></i>
            <span>Node.js</span>
          </div>
          <div className='tech-item'>
            <i className='fa fa-server'></i>
            <span>Nest.js</span>
          </div>
          <div className='tech-item'>
            <i className='fa fa-database'></i>
            <span>MySQL</span>
          </div>
          <div className='tech-item'>
            <i className='fa fa-code'></i>
            <span>Express</span>
          </div>
          <div className='tech-item'>
            <i className='fa fa-cloud'></i>
            <span>AWS</span>
          </div>
          <div className='tech-item'>
            <i className='fa fa-cubes'></i>
            <span>Docker</span>
          </div>
        </div>

        <div className='cta-buttons'>
          <Link to='/projects' className='cta-btn primary-btn'>
            View Projects
          </Link>

          <Link to='/contact' className='cta-btn secondary-btn'>
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}
export default Home;

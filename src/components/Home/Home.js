import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className='home-container' data-section='home'>
      <div className='home-header'>
        <h1>Min su Ann</h1>
        <h2>Backend Engineer & System Architect</h2>
      </div>

      <div className='home-content'>
        <p>
          (주)살린에서 메타버스 플랫폼의 백엔드 인프라를 담당하며, NestJS 기반
          API 서버 개발과 AWS/KT Cloud 인프라 운영을 주도하고 있습니다.
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

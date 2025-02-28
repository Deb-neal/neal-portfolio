import React from 'react';

function Work() {
  return (
    <section className='colorlib-work' data-section='work'>
      <div className='colorlib-narrow-content'>
        <div className='row'>
          <div className='col-md-6 col-md-offset-3 col-md-pull-3 animate-box fadeInLeft animated'>
            <span className='heading-meta'>My Work</span>
            <h2 className='colorlib-heading'>Project</h2>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6 animate-box fadeInLeft animated'>
            <div className='project'>
              <img
                src={require('../../images/readyplay.png')}
                alt='Readyplay'
              />
              <div className='desc'>
                <h3>Readyplay</h3>
                <p>가상공간를 통해 어디서든 만날 수 있는 메타버스 프로젝트</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;

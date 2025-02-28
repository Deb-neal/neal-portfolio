import React from 'react';
import './Header.css';
import picture1 from '../../images/my.jpeg';

function Header() {
  return (
    <section className='colorlib-about' data-section='header'>
      {/* Header 내용 */}
      <link
        rel='stylesheet'
        href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
      ></link>

      <aside id='colorlib-aside'>
        <div className='text center'>
          <img src={picture1} className='author-img'></img>
          <h1 id='colorlib-logo'>Min su Ann</h1>
          <span className='position'>Server development</span>
        </div>
        <nav id='colorlib-main-menu' role='navigation' className='navbar'>
          <div id='navbar' className='collapse'>
            <ul>
              <li className='active'>
                <a data-nav-section='home'>Home</a>
              </li>
              <li>
                <a data-nav-section='about'>About</a>
              </li>
              <li>
                <a data-nav-section='skills'>Tech Skills</a>
              </li>
              <li>
                <a data-nav-section='work'>Education</a>
              </li>
              <li>
                <a data-nav-section='education'>Project</a>
              </li>
              <li>
                <a data-nav-section='contact'>Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </aside>
    </section>
  );
}

export default Header;

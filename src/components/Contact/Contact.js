import React from 'react';
import './Contact.css';
import { AiOutlineMail, AiFillPhone } from 'react-icons/ai';

function Contact() {
  return (
    <section className='colorlib-contact' data-section='contact'>
      <div className='colorlib-narrow-content'>
        <div className='row'>
          <div className='col-md-6 col-md-offset-3 col-md-pull-3 animate-box fadeInLeft animated'>
            <span className='heading-meta'>Get in Touch</span>
            <h2 className='colorlib-heading'>Contact</h2>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-5'>
            <div className='colorlib-feature colorlib-feature-sm animate-box fadeInLeft animated'>
              <div className='colorlib-icon'>
                <i>
                  <AiOutlineMail />
                </i>
              </div>
              <div className='colorlib-text'>
                <p>dksaksen7@gmail.com</p>
              </div>
            </div>
            <div className='colorlib-feature colorlib-feature-sm animate-box fadeInLeft animated'>
              <div className='colorlib-icon'>
                <i>
                  <AiFillPhone />
                </i>
              </div>
              <div className='colorlib-text'>
                <p>+82 10 7415 5152</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

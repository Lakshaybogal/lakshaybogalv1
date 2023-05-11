import React from 'react';
import {FaGithub,FaInstagram,FaLinkedin} from 'react-icons/fa';
import './footer.css';
function footer() {
  return (
    <div className='footer'>
        <div className='footer-line'></div>
        <div className='footer-left'>
          <div className='email'>
              <p>Laksh </p><a href="mailto:rajputlakshay553@gmail.com">rajputlakshay553@gmail.com</a>
          </div>
          <div>
            software engineer && web developer
          </div>
        </div>
        <div className='footer-right'>
            <div className='media'>Media</div>
            <div className='media-link'>
              <ul>
                <li>
                  <a href="https://github.com/Lakshaybogal" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/lakshay-bogal/" target="_blank" rel="noopener noreferrer"> <FaLinkedin /></a>
                </li>
                <li>
                  <a href="https://www.instagram.com/_lakshay_rajput__/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                </li>
                
              </ul>
            </div>
        </div>
    </div>
  )
}

export default footer;
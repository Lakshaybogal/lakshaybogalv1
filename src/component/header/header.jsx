import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import zigzag from './img/Logo.svg';
import dotted from './img/Dots.svg';
import Type from './type-effect.jsx'
function Header() {
  return (
    <div className='Header'>
      <div className='heroSection'>
        <div className='header-img'>
          <div className='zigzag-img'>
            <img src={zigzag} alt="" />
          </div>
          <div className='heroImg'>
            <img src={require("./img/heroimg.png")} alt="" />
          </div>
          <div className='dotted-img'>
            <img src={dotted} alt="" />
          </div>
        </div>
        <div className='header-content'>
          <p>Lakshay is a <span>Software Enginner </span>and passionate<span><Type/></span></p>
          <div className='header-info'>"He enjoys tackling challenges, creating innovative solutions, constantly learning and exploring new technologies".
          </div>
          <div className='btn'>
            <Link to='/contact'>
              <button>Contact me !!</button>
            </Link>
          </div>
        </div>
      </div>
      <div className='header-quote'>
        Let's build something together !!
      </div>
    </div>
  )
}
export default Header;
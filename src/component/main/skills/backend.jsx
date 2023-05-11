import React from 'react';
import { Nav, Header, Main,About,Footer } from '../../../component'
import { SiMongodb,SiDjango,SiRender } from 'react-icons/si';
import { FaNodeJs,FaFileExport } from 'react-icons/fa';
import './skills.css';
import '../../../App.css'
function backend() {
  return (
    <div className="App">
      <header className="App-header">
      <Nav/>
      <Header/>
      </header>
      <Main/>
    <div className='Skill'>
            <div className='skill-card'>
                <div className='skill-card-item'>
                    <span><FaNodeJs /> </span>node.js
                </div>
            </div>
            <div className='skill-card'>
                <div className='skill-card-item'>
                    <span><FaFileExport /> </span>express.js
                </div>
            </div>
            <div className='skill-card'>
                <div className='skill-card-item'>
                    <span><SiDjango /> </span>djando
                </div>
            </div>
            <div className='skill-card'>
                <div className='skill-card-item'>
                    <span><SiMongodb /> </span>moongodb
                </div>
            </div>
            <div className='skill-card'>
                <div className='skill-card-item'>
                    <span><SiRender /> </span>Render
                </div>
            </div>
            </div>
            <About/>
      <Footer/>
        </div>
  )
}

export default backend
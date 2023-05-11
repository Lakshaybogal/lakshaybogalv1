import React from 'react';
import { TbBrandTailwind } from 'react-icons/tb';
import { FaReact, FaHtml5, FaCss3Alt, FaBootstrap } from 'react-icons/fa'
import { SiJquery, SiMui } from 'react-icons/si';
import { Nav, Header, Main,About,Footer } from '../../../component'
import '../../../App.css'
import './skills.css'
function framework() {
    return (
        <div className="App">
            <header className="App-header">
                <Nav />
                <Header />
            </header>
            <Main />
            <div className='Skill'>
                <div className='skill-card'>
                    <div className='skill-card-item'>
                        <span><FaHtml5 /> </span>html
                    </div>
                </div>
                <div className='skill-card'>
                    <div className='skill-card-item'>
                        <span><FaCss3Alt /> </span>css
                    </div>
                </div>
                <div className='skill-card'>
                    <div className='skill-card-item'>
                        <span><FaReact /> </span>reactjs
                    </div>
                </div>
                <div className='skill-card'>
                    <div className='skill-card-item'>
                        <span><FaBootstrap /> </span>bootstrap
                    </div>
                </div>
                <div className='skill-card'>
                    <div className='skill-card-item'>
                        <span><TbBrandTailwind /> </span>tailwind
                    </div>
                </div>
                <div className='skill-card'>
                    <div className='skill-card-item'>
                        <span><SiJquery /> </span>jquery
                    </div>
                </div>
                <div className='skill-card'>
                    <div className='skill-card-item'>
                        <span><SiMui /> </span>material ui
                    </div>
                </div>
            </div>
            <About/>
      <Footer/>
        </div>
    )
}

export default framework
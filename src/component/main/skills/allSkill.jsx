import React from 'react';

import { TbBrandTailwind, TbBrandVscode } from 'react-icons/tb';
import { FaReact, FaHtml5, FaJava, FaGithub, FaGitAlt, FaFigma, FaJs, FaPython, FaCss3Alt, FaBootstrap, FaNodeJs, FaFileExport } from 'react-icons/fa'
import { SiMongodb, SiIntellijidea, SiDjango, SiCplusplus, SiMui, SiRender } from 'react-icons/si'
import { Nav, Header, Main,About,Footer } from '../../../component'
import '../../../App.css'
function allSkill() {
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
                        <span><SiCplusplus /> </span>C++
                    </div>
                </div>
                <div className='skill-card'>
                    <div className='skill-card-item'>
                        <span><FaJava /> </span>Java
                    </div>
                </div>
                <div className='skill-card'>
                    <div className='skill-card-item'>
                        <span><FaPython /> </span>python
                    </div>
                </div>
                <div className='skill-card'>
                    <div className='skill-card-item'>
                        <span><FaJs /> </span>JavaScript
                    </div>
                </div>
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
                        <span><SiMui /> </span>material ui
                    </div>
                </div>
                <div className='skill-card'>
                    <div className='skill-card-item'>
                        <span><TbBrandVscode /> </span>vs code
                    </div>
                </div>
                <div className='skill-card'>
                    <div className='skill-card-item'>
                        <span><FaGithub /> </span>github
                    </div>
                </div>
                <div className='skill-card'>
                    <div className='skill-card-item'>
                        <span><SiIntellijidea /> </span>intellij
                    </div>
                </div>
                <div className='skill-card'>
                    <div className='skill-card-item'>
                        <span><FaFigma /> </span>figma
                    </div>
                </div>
                <div className='skill-card'>
                    <div className='skill-card-item'>
                        <span><FaGitAlt /> </span>git
                    </div>
                </div>
            </div>
            <About />
            <Footer />
        </div>
    )
}

export default allSkill
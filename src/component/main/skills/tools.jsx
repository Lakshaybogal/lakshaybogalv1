import React from 'react'
import { TbBrandVscode } from 'react-icons/tb'
import { FaGithub, FaGitAlt } from 'react-icons/fa'
import { SiIntellijidea,SiNetlify } from 'react-icons/si';
import { Nav, Header, Main,About,Footer } from '../../../component'
import '../../../App.css'
import './skills.css'
function tools() {
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
                    <span><SiNetlify /> </span>Netlify
                </div>
            </div>
            <div className='skill-card'>
                <div className='skill-card-item'>
                    <span><FaGitAlt /> </span>git
                </div>
            </div>
            </div>
            <About/>
      <Footer/>
        </div>
    )
}

export default tools
import React from 'react'
import { Nav, Header, Main, About, Footer } from '../../../component'
import { FaJava, FaJs, FaPython } from 'react-icons/fa';
import { SiCplusplus, SiC } from 'react-icons/si'
import './skills.css'
import '../../../App.css'
function language() {
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
                        <span><SiC /> </span>C
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
            </div>
            <About />
            <Footer />
        </div>
    )
}

export default language;
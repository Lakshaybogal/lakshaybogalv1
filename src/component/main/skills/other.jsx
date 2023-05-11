import React from 'react'
import { MdDataArray, MdDataObject, MdDesignServices } from 'react-icons/md';
import { FaFigma } from 'react-icons/fa';
import { Nav, Header, Main,About,Footer } from '../../../component'
import '../../../App.css'
import './skills.css'
function other() {
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
                        <span><MdDataArray /> </span>dsa
                    </div>
                </div>
                <div className='skill-card'>
                    <div className='skill-card-item'>
                        <span><MdDataObject /> </span>oops
                    </div>
                </div>
                <div className='skill-card'>
                    <div className='skill-card-item'>
                        <span><FaFigma /> </span>figma
                    </div>
                </div>
                <div className='skill-card'>
                    <div className='skill-card-item'>
                        <span><MdDesignServices /> </span>ui ux
                    </div>
                </div>
            </div>
            <About/>
      <Footer/>
        </div>
    )
}

export default other
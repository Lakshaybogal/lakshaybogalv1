import React from 'react';
import { Link } from 'react-router-dom';
import './main.css';
import Skill from './skillButtons';
function Main() {

    return (
        <main>
            <div  className='project-title title'>
                <div  className='title-name'><span>#</span>projects</div>
                <div  className='hori-line hidden-2'></div>
                <div  className='view-more hidden-2'><Link to={'/work'}>View all ~~{'>'}</Link> </div>
            </div>
            <section className='projects'>
                <div  className='project-card'>
                    <img src={require("./img/microClone-banner.png")} alt="" />
                    <div  className='card-divider'></div>
                    <p>HTML CSS JavaScript</p>
                    <div  className='card-divider'>
                        <div  className='card-heading'>MicroClone</div>
                        <p>Fully resposive Microsoft clone</p>
                        <div  className='card-btn'>
                            <a className='btn-1' href="https://micro-clonesoft.netlify.app/" target='_blank' rel="noopener noreferrer">
                                Live{'<~>'}
                            </a>
                            <a className='btn-2' href="https://github.com/Lakshaybogal/Micro-Clonesoft" target="_blank" rel="noopener noreferrer">
                                Source code{'>='}
                            </a>
                        </div>
                    </div>
                </div>
                <div  className='project-card'>
                    <img src={require("./img/microClone-banner.png")} alt="" />
                    <div  className='card-divider'></div>
                    <p>HTML CSS JavaScript</p>
                    <div  className='card-divider'>
                        <div  className='card-heading'>MicroClone</div>
                        <p>Fully resposive Microsoft clone</p>
                        <div  className='card-btn'>
                            <a className='btn-1' href="https://micro-clonesoft.netlify.app/" target='_blank' rel="noopener noreferrer">
                                Live{'<~>'}
                            </a>
                            <a className='btn-2' href="https://github.com/Lakshaybogal/Micro-Clonesoft" target="_blank" rel="noopener noreferrer">
                                Source code{'>='}
                            </a>
                        </div>
                    </div>
                </div>
                <div  className='project-card card-hidden'>
                    <img src={require("./img/microClone-banner.png")} alt="" />
                    <div  className='card-divider'></div>
                    <p>HTML CSS JavaScript</p>
                    <div  className='card-divider'>
                        <div  className='card-heading'>MicroClone</div>
                        <p>Fully resposive Microsoft clone</p>
                        <div  className='card-btn'>
                            <a className='btn-1' href="https://micro-clonesoft.netlify.app/" target='_blank' rel="noopener noreferrer">
                                Live{'<~>'}
                            </a>
                            <a className='btn-2' href="https://github.com/Lakshaybogal/Micro-Clonesoft" target="_blank" rel="noopener noreferrer">
                                Source code{'>='}
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <div  className='phone-view-more hidden'>
                <div  className='hori-line'></div>
                <div  className='view-more'><Link to={'/work'}>View all ~~{'>'}</Link></div>
            </div>
            <div  className='skill-title title'>
                <div  className='title-name'><span>#</span>skill</div>
                <div  className='hori-line skill-line hidden-2'></div>

            </div>
            <section className=''>
                <Skill/>
            </section>
            
        </main>
    )
}
export default Main;
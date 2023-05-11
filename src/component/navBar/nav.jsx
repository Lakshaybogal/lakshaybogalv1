import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { CgMenuRight } from 'react-icons/cg';
import './nav.css';

function Nav() {
    const [active,setActive] = useState(false);

    return (
        <div className='Navbar'>
            <div className='vertical-nav nav-menu'>
                <div className='vertical-line'></div>
                <div className='vertical-nav-logo'>
                    <a href="https://github.com/Lakshaybogal" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                </div>
                <div className='vertical-nav-logo'>
                    <a href="https://www.instagram.com/_lakshay_rajput__/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                </div>
                <div className='vertical-nav-logo'>
                    <a href="https://www.linkedin.com/in/lakshay-bogal/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                </div>
                <div className='vertical-line-bottom'></div>
            </div>
            <div className='Nav'>
                <div className='logo'>
                    Laksh
                </div>
                <div className={ active?'nav-phone-menu':"nav-menu"}>
                    <ul className='nav-list nav-menu-2'>
                        <li className='nav-list-item'>
                            <Link to='/'>
                                <span>#</span>home
                            </Link>

                        </li>
                        <li className='nav-list-item'>
                            <Link to='/work'>
                                <span>#</span>work
                            </Link>

                        </li>
                        <li className='nav-list-item'>
                            <span>#</span>
                            <Link to='/contact'>contact
                            </Link>
                        </li>
                        <li className='nav-list-item'>
                            <span>#</span>resume
                        </li>
                        <li className='nav-list-item'>
                            <div className='phone-vec-nav'>
                            <div className='vertical-nav-logo'>
                                <a href="https://github.com/Lakshaybogal" target="_blank" rel="noopener noreferrer">
                                    <FaGithub />
                                </a>
                            </div>
                            <div className='vertical-nav-logo'>
                                <a href="https://www.instagram.com/_lakshay_rajput__/" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram />
                                </a>
                            </div>
                            <div className='vertical-nav-logo'>
                                <a href="https://www.linkedin.com/in/lakshay-bogal/" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin />
                                </a>
                            </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='phone-nav' onClick={()=>setActive(!active)}>
                    <div>
                        <CgMenuRight />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav
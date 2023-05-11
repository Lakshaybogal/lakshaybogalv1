import React from 'react'
import { Link } from 'react-router-dom';
import './main.css';
function Skill() {

    return (
        <div className='skills'>
            <div className='btn-skill btn-skill-2' >
                <Link to='/' >
                    <div className='btn-skill-2 btn-skill'>
                        All
                    </div>
                </Link>
            </div>
            <div className='btn-skill'>
                <Link to={'/language'}>
                    <div className='btn-skill'>
                        Language
                    </div>
                </Link>
            </div>
            <div className='btn-skill btn-skill-2'>
                <Link to={'/backend'}>
                    <div className='btn-skill-2 btn-skill'>
                        Backend
                    </div>
                </Link>
            </div>
            <div className='btn-skill'>
                <Link to={'/frontend'}>
                    <div className='btn-skill'>
                        Frontend
                    </div>
                </Link>
            </div>
            <div className='btn-skill btn-skill-2'>
                <Link to={'/tools'}>
                    <div className='btn-skill-2 btn-skill'>
                        Tools
                    </div>
                </Link>
            </div>
            <div className='btn-skill'>
                <Link to={'/other'}>
                    <div className='btn-skill'>
                        Other
                    </div>
                </Link>
            </div>

        </div>
    )
}

export default Skill;
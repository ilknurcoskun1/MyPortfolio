// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [isProjectsMenuOpen, setProjectsMenuOpen] = useState(false);
    const [isContactMenuOpen, setContactMenuOpen] = useState(false);

    const handleProjectsMenuEnter = () => {
        setProjectsMenuOpen(true);
    };

    const handleProjectsMenuLeave = () => {
        setProjectsMenuOpen(false);
    };

    const handleContactMenuEnter = () => {
        setContactMenuOpen(true);
    };

    const handleContactMenuLeave = () => {
        setContactMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-links">

            <li>
        
                    <a href='/'>Home</a>
                </li>
                <li
                    onMouseEnter={handleProjectsMenuEnter}
                    onMouseLeave={handleProjectsMenuLeave}
                >
        

                    <Link to="/#">Projects</Link>

                    <div
                        className={`sub-menu ${isProjectsMenuOpen ? 'open' : ''}`}
                        onMouseEnter={handleProjectsMenuEnter}
                        onMouseLeave={handleProjectsMenuLeave}
                    >
                        <div className="projects-submenu">
                            <ul>
                                <li>
                       
                                    <a href='/Project1'>Project1</a>
                                </li>
                                <li>
                     
                                    <a href='/Project2'>Project2</a>
                                </li>
                                <li>
                     
                                    <a href='/Project3'>Project3</a>
                                </li>
                            
                            </ul>
                        </div>
                    </div>
                </li>
                
                <li>
    
                    <a href='/Skills'>Skills</a>
                </li>
                <li>
         
                    <a href='/contact'>Contact</a>
                </li>
            </div>
        </nav>
    );
}

export default Navbar;

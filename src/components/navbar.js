import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

import Logo from '../assets/img/logo.png';
import Resume from '../assets/misc/doc/resume.pdf';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <a href="">
                    <img className="navbar-brand-img" src={Logo} width="30" height="30" alt="" />
                </a>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <a className="nav-link" name="profile-card" href="#profile-card">Introduction</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" name="timeline" href="#timeline">Timeline</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" name="skills" href="#skills">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" name="projects" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" name="certificates" href="#certificates">Certificates</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" name="contact" href="#contact">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-link-external" href={Resume} target="_blank">
                                Resume <FontAwesomeIcon icon={faExternalLinkAlt} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    );
}

export default Navbar;

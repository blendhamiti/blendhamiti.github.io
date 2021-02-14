import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

import Logo from '../assets/img/logo.png';
import Resume from '../assets/misc/doc/resume.pdf';

function Navbar() {
    const [collapse, setCollapse] = React.useState(false);

    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark">
            <div className="container">
                <button className="navbar-toggler" onClick={() => setCollapse(!collapse)}>
                    <span className="navbar-toggler-icon"></span>
                </button>

                <a href="">
                    <img className="navbar-brand-img" src={Logo} width="30" height="30" alt="" />
                </a>

                <div className={(collapse) ? "collapse navbar-collapse show" : "collapse navbar-collapse"}>
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

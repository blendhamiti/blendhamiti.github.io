import React from 'react';
import { Fade } from 'react-reveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import Logo from '../assets/img/logo.png';

function Navbar(props) {
    const [collapse, setCollapse] = React.useState(false);

    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark">

            <Fade down>

                <div className="container">
                    <button className="navbar-toggler" onClick={() => setCollapse(!collapse)}>
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <a href="#">
                        <img className="navbar-brand-img" src={Logo} width="30" height="30" alt="" />
                    </a>

                    <div className={(collapse) ? "collapse navbar-collapse show" : "collapse navbar-collapse"}>
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Introduction</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#timeline">Timeline</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#skills">Skills</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#projects">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#certificates">Certificates</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-link-external" href="/resume.pdf">
                                    Resume <FontAwesomeIcon icon={faExternalLinkAlt} />
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

            </Fade>

        </nav >
    );
}

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

import Logo from '../assets/img/logo.png';
import Resume from '../assets/misc/doc/resume.pdf';

function Navbar(props) {
    const [collapse, setCollapse] = React.useState(false);

    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark">
            <div className="container">
                <button className="navbar-toggler" onClick={() => setCollapse(!collapse)}>
                    <span className="navbar-toggler-icon"></span>
                </button>

                <a href="#">
                    <img className="navbar-brand-img" src={Logo} width="30" height="30" alt="" />
                </a>

                <div className={(collapse) ? "collapse navbar-collapse show" : "collapse navbar-collapse"}>
                    <ul className="navbar-nav mx-auto">
                        <li className={(props.page === 'profile-card') ? "nav-item active" : "nav-item"}>
                            <Link className="nav-link" name="profile-card" to="/">Introduction</Link>
                        </li>
                        <li className={(props.page === 'timeline') ? "nav-item active" : "nav-item"}>
                            <Link className="nav-link" name="timeline" to="/timeline">Timeline</Link>
                        </li>
                        <li className={(props.page === 'skills') ? "nav-item active" : "nav-item"}>
                            <Link className="nav-link" name="skills" to="/skills">Skills</Link>
                        </li>
                        <li className={(props.page === 'projects') ? "nav-item active" : "nav-item"}>
                            <Link className="nav-link" name="projects" to="/projects">Projects</Link>
                        </li>
                        <li className={(props.page === 'certificates') ? "nav-item active" : "nav-item"}>
                            <Link className="nav-link" name="certificates" to="/certificates">Certificates</Link>
                        </li>
                        <li className={(props.page === 'contact') ? "nav-item active" : "nav-item"}>
                            <Link className="nav-link" name="contact" to="/contact">Contact</Link>
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

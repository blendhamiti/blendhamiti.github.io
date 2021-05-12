import React from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import * as styles from './Navbar.module.scss';

function Navbar() {
  const [collapse, setCollapse] = React.useState(false);

  return (
    <nav className={styles.nav}>
      <div>
        {/* <button onClick={() => setCollapse(!collapse)}>Toggler</button> */}
        {/* <a href='#'>
                    <img
                        src='/assets/images/logo.png'
                        width='30'
                        height='30'
                        alt='logo'
                    />
                </a> */}
        <div>
          <ul>
            <li>
              <a href="#profile-card">Introduction</a>
            </li>
            <li>
              <a href="#timeline">Timeline</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#certificates">Certificates</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="/resume.pdf" className={styles.resume}>
                Resume <FontAwesomeIcon icon={faExternalLinkAlt} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

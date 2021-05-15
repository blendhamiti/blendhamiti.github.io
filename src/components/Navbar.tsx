import React, { FC } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faBars } from '@fortawesome/free-solid-svg-icons';

import * as styles from './Navbar.module.scss';

const Navbar: FC<{}> = () => {
  const [collapse, setCollapse] = React.useState(false);

  return (
    <nav>
      <div>
        <button onClick={() => setCollapse(!collapse)}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
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
    </nav>
  );
};

export default Navbar;

import React, { FC, useRef, useState } from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faBars } from '@fortawesome/free-solid-svg-icons';

import * as styles from './Navbar.module.scss';

const Navbar: FC<{}> = () => {
  const [collapse, setCollapse] = useState(true);
  const navRef = useRef<HTMLElement>(null);

  useState(() => {
    document.addEventListener('click', (event) => handleDropdownClick(event));
    return () =>
      document.removeEventListener('click', (event) =>
        handleDropdownClick(event)
      );
  });

  const handleDropdownClick = (event) => {
    if (
      navRef.current.contains(event.target) &&
      event.target.localName === 'a'
    ) {
      setCollapse(true);
    } else if (navRef.current.contains(event.target)) {
    } else {
      setCollapse(true);
    }
  };

  return (
    <nav ref={navRef}>
      <div className={styles.container}>
        <button
          className={styles.toggleButton}
          onClick={() => setCollapse(!collapse)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <ul
        className={clsx(styles.links, !collapse && styles.showDropdown)}
        onClick={(event) => handleDropdownClick(event)}
      >
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

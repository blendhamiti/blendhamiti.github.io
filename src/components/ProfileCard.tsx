import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

import * as styles from './ProfileCard.module.scss';

function ProfileCard() {
  return (
    <div className={styles.parent}>
      <div id="profile-card" className={styles.container}>
        <div className={styles.content}>
          <div className={styles.pic}>
            <StaticImage
              src="../images/profile/portrait.jpg"
              alt="portrait"
              placeholder="blurred"
              layout="fixed"
              width={160}
              height={160}
            />
          </div>
          <div className={styles.title}>
            <h1>Hi, I am Blend!</h1>
          </div>
          <div className={styles.description}>
            <p>
              I am an Engineering Technology graduate who has an interest in
              programming. This webiste is meant to showcase my skills and
              experience.
            </p>
          </div>
          <div className={styles.links}>
            <Icon
              link="https://github.com/blendhamiti/"
              icon={faGithub}
              title={'Go to my GitHub profile.'}
            />
            <Icon
              link="https://www.linkedin.com/in/blendhamiti/"
              icon={faLinkedin}
              title={'Go to my LinkedIn profile.'}
            />
            <Icon
              link="https://www.instagram.com/blendhamiti/"
              icon={faInstagram}
              title={'Go to my Instagram profile.'}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon(props) {
  return (
    <div>
      <a href={props.link} target="_blank" rel="noreferrer" title={props.title}>
        <FontAwesomeIcon icon={props.icon} size="2x" />
      </a>
    </div>
  );
}

export default ProfileCard;

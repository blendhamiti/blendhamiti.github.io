import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import styles from "./profileCard.module.scss";

function ProfileCard() {
    return (
        <div id='profile-card' className={styles.container}>
            <div className={styles.content}>
                <div className={styles.pic}>
                    <img
                        src='/assets/images/portrait.jpg'
                        width='160px'
                        height='160px'
                    />
                </div>
                <div className={styles.title}>
                    <h1>Hi, I am Blend!</h1>
                </div>
                <div className={styles.description}>
                    <p>
                        I am an Engineering Technology graduate who has an
                        interest in programming. This webiste is meant to
                        showcase my skills and experience.
                    </p>
                </div>
                <div className={styles.links}>
                    <Icon
                        link='https://github.com/blendhamiti/'
                        icon={faGithub}
                    />
                    <Icon
                        link='https://www.linkedin.com/in/blendhamiti/'
                        icon={faLinkedin}
                    />
                    <Icon
                        link='https://www.instagram.com/blendhamiti/'
                        icon={faInstagram}
                    />
                </div>
            </div>
        </div>
    );
}

function Icon(props) {
    return (
        <div className='col-auto'>
            <a href={props.link} target='_blank'>
                <FontAwesomeIcon icon={props.icon} size='2x' />
            </a>
        </div>
    );
}

export default ProfileCard;

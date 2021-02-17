import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'

import ProfilePicture from '../assets/img/portrait.JPG'
import PixelatedProfilePicture from '../assets/img/portrait-distorted.JPG'

function ProfileCard() {
    const [mouseOver, setMouseOver] = React.useState(false);

    let profileImage = PixelatedProfilePicture;
    if (mouseOver)
        profileImage = ProfilePicture;
    else
        profileImage = PixelatedProfilePicture;

    return (
        <div className="container profile-card" id="profile-card">
            <div className="row justify-content-center">
                <div className="col profile-card-container">
                    <div className="row profile-card-content">
                        <div className="col-auto my-auto">
                            <img
                                onMouseOver={() => setMouseOver(true)}
                                onMouseOut={() => setMouseOver(false)}
                                className="profile-img"
                                src={profileImage} />
                        </div>
                        <div className="col-md">
                            <div className="row justify-content-center">
                                <div className="col-auto text-center text-md-left">
                                    <h1>Hi, I am Blend!</h1>
                                    <p>I am an Engineering Technology graduate who has an interest in
                                    programming. This webiste is meant to showcase my skills and experience.</p>
                                </div>
                            </div>
                            <div className="row justify-content-center justify-content-md-left">
                                <Icon
                                    link="https://github.com/blendhamiti/"
                                    icon={faGithub} />
                                <Icon
                                    link="https://www.linkedin.com/in/blendhamiti/"
                                    icon={faLinkedin} />
                                <Icon
                                    link="https://www.instagram.com/blendhamiti/"
                                    icon={faInstagram} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Icon(props) {
    return (
        <div className="col-auto">
            <a href={props.link} target="_blank">
                <FontAwesomeIcon icon={props.icon} size="2x" /></a>
        </div>
    );
}

export default ProfileCard;

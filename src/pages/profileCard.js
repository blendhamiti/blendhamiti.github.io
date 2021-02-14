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
        <div className="profile-card">
            <div className="row justify-content-center">
                <div className="profile-card-container">
                    <div className="profile-card-content">
                        <div className="col-auto my-auto">
                            <img
                                onMouseOver={() => setMouseOver(true)}
                                onMouseOut={() => setMouseOver(false)}
                                className="profile-img"
                                src={profileImage}></img>
                        </div>
                        <div className="col-md">
                            <div className="row justify-content-center">
                                <div className="col-auto text-center text-md-left">
                                    <h1>Hi, I am Blend!</h1>
                                    <p>I am an Engineering Technology graduate who has an interest in
                                    programming. This webiste is meant to showcase my skills and experience.
                            </p>
                                </div>
                            </div>
                            <div className="row justify-content-center justify-content-md-left">
                                <div className="col-auto">
                                    <a href="https://github.com/blendhamiti/" target="_blank">
                                        <FontAwesomeIcon icon={faGithub} size="2x" /></a>
                                </div>
                                <div className="col-auto">
                                    <a href="https://www.linkedin.com/in/blendhamiti/" target="_blank">
                                        <FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                                </div>
                                <div className="col-auto">
                                    <a href="https://www.instagram.com/blendhamiti/" target="_blank">
                                        <FontAwesomeIcon icon={faInstagram} size="2x" /></a>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default ProfileCard;

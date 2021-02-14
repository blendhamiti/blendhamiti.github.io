import React from 'react';

function Contact() {
    return (
        <div className="contact container">
            <div className="row justify-content-center pb-3">
                <div className="col-auto">
                    <h1>Contact me</h1>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-auto">
                    <button className="btn btn-secondary" onclick="window.open('mailto:b.hamiti.9@gmail.com');">Shoot me an
                email</button>
                </div>
            </div>
        </div>
    );
}

export default Contact;

import React from 'react';

import Navbar from '../components/navbar';

function Contact() {
    return (
        <div>
            <Navbar page="contact" />
            <div className="contact container" id="contact">
                <div className="row justify-content-center pb-3">
                    <div className="col-auto">
                        <h1>Contact me</h1>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <a href="mailto:b.hamiti.9@gmail.com">
                            <button className="btn btn-secondary">
                                Shoot me an email
                    </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;

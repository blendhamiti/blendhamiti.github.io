import React from 'react';

import Particles from 'react-particles-js';
import config from '../assets/config/particles.json'

function Background() {
    return (
        <div className="page-bg">
            <Particles
                params={config} />
        </div>
    );
}

export default Background;

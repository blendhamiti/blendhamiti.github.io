import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './components/navbar';
import ProfileCard from './components/profileCard';

import "./assets/scss/main.scss";

ReactDOM.render(
    <div>
        <Navbar />
        <ProfileCard />
    </div>,
    document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './components/navbar';
import ProfileCard from './pages/profileCard';
import Timeline from './pages/timeline';
import Skills from './pages/skills';
import Projects from './pages/projects';
import Certificates from './pages/certificates';
import Contact from './pages/contact';
import Footer from './components/footer';
import Background from './components/background';

import "./assets/scss/main.scss";

ReactDOM.render(
    <div>
        <Background />
        <Navbar />
        <ProfileCard />
        <Timeline />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
        <Footer />
    </div>,
    document.getElementById('root')
);

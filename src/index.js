import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ProfileCard from './pages/profileCard';
import Timeline from './pages/timeline';
import Skills from './pages/skills';
import Projects from './pages/projects';
import Certificates from './pages/certificates';
import Contact from './pages/contact';
import Footer from './components/footer';
import Background from './components/background';

import "./assets/scss/main.scss";

function App() {
    return (
        <div>
            <Background />
            <Router>
                <Route exact path="/">
                    <ProfileCard />
                </Route>
                <Route path="/timeline">
                    <Timeline />
                </Route>
                <Route path="/skills">
                    <Skills />
                </Route>
                <Route path="/projects">
                    <Projects />
                </Route>
                <Route path="/certificates" on>
                    <Certificates />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
            </Router>
            <Footer />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

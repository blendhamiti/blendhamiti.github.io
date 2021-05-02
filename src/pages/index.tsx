import React from 'react';

import Background from '../components/Background';
import Certificates from '../components/Certificates';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ProfileCard from '../components/ProfileCard';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Timeline from '../components/Timeline';

import '../styles/global.scss';

export default function App() {
  return (
    <>
      <header>
        <Background />
        <Navbar />
      </header>
      <main>
        <ProfileCard />
        {/* <Timeline /> */}
        {/* <Skills /> */}
        {/* <Projects /> */}
        {/* <Certificates /> */}
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

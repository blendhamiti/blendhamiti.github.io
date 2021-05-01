import React from "react";

import ProfileCard from "@pages/profileCard";
import Timeline from "@pages/timeline";
import Skills from "@pages/skills";
import Projects from "@pages/projects";
import Certificates from "@pages/certificates";
import Contact from "@pages/contact";
import Navbar from "@components/navbar";
import Footer from "@components/footer";
import Background from "@components/background";

import "@styles/global.scss";

export default function App() {
    return (
        <>
            <header>
                <Background />
                <Navbar />
            </header>
            <main>
                <ProfileCard />
                <Timeline />
                <Skills />
                <Projects />
                <Certificates />
                <Contact />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
}

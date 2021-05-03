import { graphql, useStaticQuery } from 'gatsby';
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

export default function App({ data }) {
  const getData = (entity) =>
    data.allApiJson.edges.filter((edge) => edge.node[entity])[0].node[entity];

  const certificates = getData('certificates');
  const projects = getData('projects');
  const skills = getData('skills');
  const events = getData('events');

  return (
    <>
      <header>
        <Background />
        <Navbar />
      </header>
      <main>
        <ProfileCard />
        <Timeline data={events} />
        <Skills data={skills} />
        <Projects data={projects} />
        <Certificates data={certificates} />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export const query = graphql`
  query MyQuery {
    allApiJson {
      edges {
        node {
          skills {
            category
            skills {
              level
              name
            }
          }
          certificates {
            filename
            name
          }
          events {
            date
            description
            location
            title
          }
          projects {
            description
            icons
            name
            title
          }
        }
      }
    }
  }
`;

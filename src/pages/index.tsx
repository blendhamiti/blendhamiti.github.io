import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

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
  const siteMetadata = data.site.siteMetadata;

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: 'en',
        }}
      >
        <meta charSet="utf-8" />
        <title>{siteMetadata.title}</title>
        <meta name="description" content={siteMetadata.description} />
        <link rel="canonical" href={siteMetadata.siteUrl} />
      </Helmet>
      <Background />
      <Navbar />
      <main>
        <ProfileCard />
        {/* <Timeline apiData={events} />
        <Skills apiData={skills} />
        <Projects apiData={projects} /> */}
        <Certificates />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export const getSiteMetadata = graphql`
  query getIndexPageData {
    site {
      siteMetadata {
        description
        siteUrl
        title
      }
    }
  }
`;

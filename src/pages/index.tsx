import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
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
import {
  getApiData,
  getCertificateImages,
  getSiteMetadata,
} from '../util/graphql';

import '../styles/global.scss';

export default function App({ data }) {
  const siteMetadata = getSiteMetadata(data);

  const certificateImages = getCertificateImages(data);

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
        <Certificates images={certificateImages} />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export const getAllData = graphql`
  query MyQuery {
    site {
      siteMetadata {
        description
        siteUrl
        title
      }
    }
    allImageSharp {
      edges {
        node {
          gatsbyImageData(placeholder: DOMINANT_COLOR, width: 1200)
        }
      }
    }
  }
`;

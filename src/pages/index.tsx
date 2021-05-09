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
import { TCertificate, TCertificateImage } from '../util/types';

import '../styles/global.scss';

export default function App({ data }) {
  const getData: (entity: string) => any = (entity) =>
    data.allApiJson.edges.filter((edge) => edge.node[entity])[0].node[entity];

  const certificates = getData('certificates');
  const projects = getData('projects');
  const skills = getData('skills');
  const events = getData('events');

  const certificateImages: TCertificateImage[] = data.allImageSharp.edges.map(
    (edge): TCertificateImage => {
      return {
        filename: edge.node.gatsbyImageData.images.fallback.src.split('/')[4],
        image: edge.node.gatsbyImageData,
      };
    }
  );

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
      <header>
        <Background />
        <Navbar />
      </header>
      <main>
        <ProfileCard />
        <Timeline data={events} />
        <Skills data={skills} />
        <Projects apiData={projects} />
        <Certificates apiData={certificates} images={certificateImages} />
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
    site {
      siteMetadata {
        description
        siteUrl
        title
      }
    }
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
    allImageSharp {
      edges {
        node {
          gatsbyImageData(placeholder: DOMINANT_COLOR, width: 1200)
        }
      }
    }
  }
`;

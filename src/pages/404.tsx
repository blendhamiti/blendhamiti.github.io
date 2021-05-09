import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';

import Background from '../components/Background';

import * as styles from './404.module.scss';
import { getSiteMetadata } from '../util/graphql';

export default function ErrorPage({ data }) {
  const siteMetadata = getSiteMetadata(data);

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: 'en',
        }}
      >
        <meta charSet="utf-8" />
        <title>Page not found - {siteMetadata.title}</title>
      </Helmet>
      <Background />
      <div className={styles.errorContainer}>
        <div>
          <h1>Sorry, this page does not exist!</h1>
          <h1>
            <a href={'/'}>Go back</a>
          </h1>
        </div>
      </div>
    </>
  );
}

export const query = graphql`
  query MyOtherQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

import React, { FC } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

import PageTitle from '../components/PageTitle';
import { TCertificateImage } from '../util/types';
import { getImage } from '../util/graphql';

import * as styles from './Certificates.module.scss';

interface CertificateProps {
  name: string;
  image: IGatsbyImageData;
}

const Certificates: FC<{}> = () => {
  const getCertificatesResult = useStaticQuery(graphql`
    query getCertificates {
      allApiJson {
        edges {
          node {
            certificates {
              filename
              name
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
  `);

  const certificates =
    getCertificatesResult.allApiJson.edges[0].node.certificates;

  const certificateImages = getCertificatesResult.allImageSharp.edges.map(
    (edge): TCertificateImage => {
      return {
        filename: edge.node.gatsbyImageData.images.fallback.src.split('/')[4],
        image: edge.node.gatsbyImageData,
      };
    }
  );

  const certificateList = certificates.map((certificate, index) => (
    <Certificate
      name={certificate.name}
      image={getImage(certificateImages, certificate.filename).image}
      key={index}
    />
  ));

  return (
    <div className={styles.container} id="certificates">
      <PageTitle title="Certificates" />
      <div className={styles.content}>{certificateList}</div>
    </div>
  );
};

const Certificate: FC<CertificateProps> = ({ name, image }) => {
  return (
    <div className={styles.item}>
      <GatsbyImage image={image} alt={name} />
    </div>
  );
};

export default Certificates;

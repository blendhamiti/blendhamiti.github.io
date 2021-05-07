import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

import PageTitle from '../components/PageTitle';

import * as styles from './Certificates.module.scss';

function Certificates({ data, certificateImages }) {
  const getCertificateImage = (filename) =>
    certificateImages.find(
      (certificateImage) => certificateImage.filename === filename
    );

  const certificates = data.map((certificate, index) => (
    <Certificate
      certificate={certificate}
      certificateImage={getCertificateImage(certificate.filename)}
      key={index}
    />
  ));

  return (
    <div className={styles.container} id="certificates">
      <PageTitle title="Certificates" />
      <div className={styles.content}>{certificates}</div>
    </div>
  );
}

function Certificate({ certificate, certificateImage }) {
  return (
    <div className={styles.item}>
      <GatsbyImage
        image={certificateImage.gatsbyImageData}
        alt={certificateImage.filename.split('.')[0]}
      />
    </div>
  );
}

export default Certificates;

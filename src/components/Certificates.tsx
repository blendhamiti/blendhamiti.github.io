import React from 'react';
import { FC } from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

import PageTitle from '../components/PageTitle';
import { TCertificate, TCertificateImage } from '../util/types';

import * as styles from './Certificates.module.scss';

interface CertificatesProps {
  apiData: TCertificate[];
  images: TCertificateImage[];
}

interface CertificateProps {
  name: string;
  image: IGatsbyImageData;
}

const Certificates: FC<CertificatesProps> = ({ apiData, images }) => {
  const getImage: (filename: string) => TCertificateImage = (filename) =>
    images.find((image: TCertificateImage) => image.filename === filename);

  const certificates = apiData.map((certificate, index) => (
    <Certificate
      name={certificate.name}
      image={getImage(certificate.filename).image}
      key={index}
    />
  ));

  return (
    <div className={styles.container} id="certificates">
      <PageTitle title="Certificates" />
      <div className={styles.content}>{certificates}</div>
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

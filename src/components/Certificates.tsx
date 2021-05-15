import React, { FC } from 'react';

import { getCertificates } from '../util/queries';

import * as styles from './Certificates.module.scss';

const Certificates: FC<{}> = () => {
  const certificates = getCertificates();

  const certificateElements = certificates.map((certificate) => (
    <h1>{certificate.name}</h1>
  ));

  return <div>{certificateElements}</div>;
};

export default Certificates;

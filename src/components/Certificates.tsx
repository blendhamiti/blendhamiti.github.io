import React, { FC } from 'react';

import { getCertificates } from '../util/queries';

const Certificates: FC<{}> = () => {
  const certificates = getCertificates();

  const certificateElements = certificates.map((certificate) => (
    <h1>{certificate.name}</h1>
  ));

  return <div>My certificates: {certificateElements}</div>;
};

export default Certificates;

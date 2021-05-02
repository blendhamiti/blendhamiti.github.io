import React from 'react';
import clsx from 'clsx';

import PageTitle from '../components/PageTitle';

import * as styles from './Certificates.module.scss';

function Certificates({ data }) {
  const certificates = data.map((certificate, index) => (
    <Certificate certificate={certificate} key={index} />
  ));

  return (
    <div className={styles.container} id="certificates">
      <PageTitle title="Certificates" />
      <div className={styles.content}>{certificates}</div>
    </div>
  );
}

function Certificate({ certificate }) {
  return (
    <div className={styles.item}>
      <img
        className={styles.thumbnail}
        src={certificate.filename}
        alt={certificate.name}
      />
    </div>
  );
}

export default Certificates;

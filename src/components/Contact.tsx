import React, { FC } from 'react';

import PageTitle from '../components/PageTitle';

import * as styles from './Contact.module.scss';

const Contact: FC<{}> = () => {
  return (
    <div id="contact" className={styles.contact}>
      <div className={styles.title}>Contact me</div>
      <div>
        <a href="mailto:b.hamiti.9@gmail.com">
          <button>Shoot me an email</button>
        </a>
      </div>
    </div>
  );
};

export default Contact;

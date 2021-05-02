import React from 'react';

import PageTitle from '../components/PageTitle';

import * as styles from './Contact.module.scss';

function Contact() {
  return (
    <div id="contact">
      <PageTitle title="Contact" />
      <div>
        <div>
          <a href="mailto:b.hamiti.9@gmail.com">
            <button>Shoot me an email</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;

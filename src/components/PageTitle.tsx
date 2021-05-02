import React from 'react';

import * as styles from './PageTitle.module.scss';

function PageTitle(props) {
  return (
    <div className={styles.container}>
      <h2>{props.title}</h2>
    </div>
  );
}

export default PageTitle;

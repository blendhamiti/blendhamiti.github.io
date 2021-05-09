import React, { FC } from 'react';

import * as styles from './PageTitle.module.scss';

interface PageTitleProps {
  title: string;
}

const PageTitle: FC<PageTitleProps> = ({ title }) => {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
    </div>
  );
};

export default PageTitle;

import React from 'react';
import { graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import PageTitle from '../components/PageTitle';

import * as styles from './Timeline.module.scss';

function Timeline({ data }) {
  const eventList = data.map((event, index) => (
    <Event event={event} key={index} />
  ));

  return (
    <div id="timeline" className={styles.container}>
      <PageTitle title={'Timeline'} />
      <div className={styles.content}>
        <ul className={styles.events}>{eventList}</ul>
      </div>
    </div>
  );
}

function Event({ event }) {
  return (
    <li>
      <div>
        <div>
          <span>{event.title}</span>
          <span>
            <span>{event.date}</span>
          </span>
        </div>
        <div>
          {event.description}
          <br />
          {event.location}
        </div>
      </div>
    </li>
  );
}

export default Timeline;

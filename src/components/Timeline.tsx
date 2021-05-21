import React, { FC } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import PageTitle from '../components/PageTitle';
import { TEvent } from '../util/types';

import * as styles from './Timeline.module.scss';

const Timeline: FC<{}> = () => {
  const getEventsResult = useStaticQuery(graphql`
    query getEvents {
      allApiJson {
        nodes {
          events {
            date
            description
            location
            title
          }
        }
      }
    }
  `);

  const events: TEvent[] = getEventsResult.allApiJson.nodes.find(
    (node) => node.events
  ).events;

  const eventList = events.map((event, index) => (
    <Event
      title={event.title}
      date={event.date}
      description={event.description}
      location={event.location}
      key={index}
    />
  ));

  return (
    <div id="timeline" className={styles.container}>
      <PageTitle title={'Timeline'} />
      <div className={styles.content}>
        <ul className={styles.events}>{eventList}</ul>
      </div>
    </div>
  );
};

const Event: FC<TEvent> = ({ title, date, description, location }) => {
  return (
    <li>
      <div>
        <div>
          <strong>{title}</strong> {date}
          <br />
          {description}
          <br />
          {location}
        </div>
      </div>
    </li>
  );
};

export default Timeline;

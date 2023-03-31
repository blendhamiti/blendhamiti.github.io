import React, { FC } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import PageTitle from '../components/PageTitle';
import { TEvent } from '../util/types';

import * as styles from './Timeline.module.scss';
import clsx from 'clsx';

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
            details
            logo
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
      logo={event.logo}
      details={event.details}
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

const Event: FC<TEvent> = ({ title, date, description, location, logo, details }) => {
  return (
    <li>
      <div className={styles.event}>
        <img src={require(`../images/logos/${logo}`).default} alt={location} className={clsx(["seeu.png"].includes(logo) && styles.withBg)} />
        <div>
          <strong>{title}</strong> {date}
          <br />
          {description}
          <br />
          {location}
          <br />
          <div dangerouslySetInnerHTML={{__html: details || ""}} />
        </div>
      </div>
    </li>
  );
};

export default Timeline;

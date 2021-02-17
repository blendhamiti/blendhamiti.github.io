import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

import timelineData from '../assets/config/timeline.json'
import PageTitle from '../components/pageTitle';

function Timeline() {
    return (
        <div className="timeline container" id="timeline">
            <PageTitle title="Timeline" />
            <EventList data={timelineData} />
        </div>
    );
}

function EventList(props) {
    const [showAll, setShowAll] = React.useState(false);

    let events = props.data.events;
    let buttonText = "Show less";
    if (!showAll) {
        events = events.filter(element => !element.hidden);
        buttonText = "Show all";
    }

    const eventList = events.map((element, index) =>
        <Event event={element} key={index} />
    );

    return (
        <div>
            <ul className="line">
                {eventList}
            </ul>
            <div className="row">
                <div className="col text-center">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="btn btn-primary">
                        {buttonText}
                    </button>
                </div>
            </div>
            <div className="row">
                <div className="col py-2 text-center small">
                    <a className="lightblue-link" target="_blank" href="https://codepen.io/NilsWe">
                        Inspired by Nils Wittles
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                    </a>
                </div>
            </div>
        </div>
    );
}

function Event(props) {
    function getSize(size) {
        switch (size) {
            case 's':
                return 'small'
            case 'm':
                return 'medium'
            case 'l':
                return 'large'
            default:
                return 'medium'
        }
    }

    return (
        <li className={"size-" + props.event.size}>
            <div className={"direction-" + props.event.side}>
                <div className="flag-wrapper">
                    <span className="flag">{props.event.title}</span>
                    <span className="time-wrapper"><span className="time">{props.event.date}</span></span>
                </div>
                <div className="desc">
                    {props.event.desc}
                    <br />
                    {props.event.location}
                </div>
            </div>
        </li>
    );
}

export default Timeline;

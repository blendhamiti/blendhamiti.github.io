import React from 'react';

import timelineData from '../assets/misc/json/timeline.json'
import PageTitle from '../components/pageTitle';

function Timeline() {
    return (
        <div class="timeline container">
            <PageTitle title="Timeline" />
            <EventList />
        </div>

    );
}

function EventList(props) {
    const eventList = timelineData.events.map((element) =>
        <Event event={element} />
    );

    return (
        <ul className="line">
            {eventList}
        </ul>
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

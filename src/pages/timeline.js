import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

import PageTitle from "../components/pageTitle";

import styles from "./timeline.module.scss";

function Timeline() {
    const [events, setEvents] = React.useState([]);

    React.useEffect(() => {
        fetch("/api/timeline.json")
            .then((response) => response.json())
            .then(
                (result) => setEvents(result.events),
                (error) => console.log(error)
            );
    }, []);

    return (
        <div id="timeline" className={styles.container}>
            <PageTitle title={"Timeline"} />
            <div className={styles.content}>
                <EventList events={events} />
            </div>
        </div>
    );
}

function EventList(props) {
    const [showAll, setShowAll] = React.useState(false);

    let events = props.events;
    let buttonText = "Show less";

    if (!showAll) {
        events = events.filter((element) => !element.hidden);
        buttonText = "Show all";
    }

    const eventList = events.map((element, index) => <Event event={element} />);

    return (
        <div>
            <ul className={styles.events}>{eventList}</ul>
            <button onClick={() => setShowAll(!showAll)}>{buttonText}</button>
        </div>
    );
}

function Event(props) {
    return (
        <li>
            <div>
                <div>
                    <span>{props.event.title}</span>
                    <span>
                        <span>{props.event.date}</span>
                    </span>
                </div>
                <div>
                    {props.event.descr}
                    <br />
                    {props.event.location}
                </div>
            </div>
        </li>
    );
}

export default Timeline;

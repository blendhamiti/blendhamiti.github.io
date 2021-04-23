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
            <EventList events={events} />
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
            <ul>{eventList}</ul>
            <div>
                <div>
                    <button onClick={() => setShowAll(!showAll)}>
                        {buttonText}
                    </button>
                </div>
            </div>
            <div>
                <div>
                    <a target="_blank" href="https://codepen.io/NilsWe">
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
            case 1:
                return "small";
            case 2:
                return "medium";
            case 3:
                return "large";
            default:
                return "medium";
        }
    }

    function getSide(active) {
        return active ? "r" : "l";
    }

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

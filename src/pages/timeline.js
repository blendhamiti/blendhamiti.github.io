import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { Fade } from "react-reveal";

import PageTitle from "../components/pageTitle";

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
        <div className="timeline container" id="timeline">
            <PageTitle title="Timeline" />
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

    const eventList = events.map((element, index) => (
        <Fade key={element.title}>
            <Event event={element} />
        </Fade>
    ));

    return (
        <div>
            <ul className="line">{eventList}</ul>
            <div className="row">
                <div className="col text-center">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="btn btn-primary"
                    >
                        {buttonText}
                    </button>
                </div>
            </div>
            <div className="row">
                <div className="col py-2 text-center small">
                    <a
                        className="lightblue-link"
                        target="_blank"
                        href="https://codepen.io/NilsWe"
                    >
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
        <li className={"size-" + getSize(props.event.size)}>
            <div className={"direction-" + getSide(props.event.active)}>
                <div className="flag-wrapper">
                    <span className="flag">{props.event.title}</span>
                    <span className="time-wrapper">
                        <span className="time">{props.event.date}</span>
                    </span>
                </div>
                <div className="desc">
                    {props.event.descr}
                    <br />
                    {props.event.location}
                </div>
            </div>
        </li>
    );
}

export default Timeline;

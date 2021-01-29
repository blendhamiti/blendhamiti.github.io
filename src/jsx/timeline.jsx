function Events(props) {
    var eventList = [];
    props.events.forEach(element => {
        eventList.push(<Event event={element} />);
    });

    return (
        <ul className="line" data-aos="fade-in" data-aos-once="true">
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

    function getDirection(direction, shortNotation) {
        if (shortNotation) {
            if (direction) return 'r';
            else           return 'l';
        } else {
            if (direction) return 'right';
            else           return 'left';
        }
    }

    return (
        <li className={"size-" + getSize(props.event.size)}>
            <div className={"direction-" + getDirection(props.event.direction, 1)} data-aos={"fade-" + getDirection(props.event.direction, 0)} data-aos-once="true">
                <div className="flag-wrapper">
                    <span className="flag">{props.event.title}</span>
                    <span className="time-wrapper"><span className="time">{props.event.date}</span></span>
                </div>
                <div className="desc">
                    {props.event.desc}
                    <br/>
                    {props.event.location}
                </div>
            </div>
        </li>
    );
}

eventsJSON = {
    "events": [
        {
            "size": "l",
            "direction": 1,
            "title": "Internship",
            "date": "20.01.2021",
            "desc": "Intern; Inspire11, North Macedonia"
        }, 
        {
            "size": "s",
            "direction": 0,
            "title": "Internship",
            "date": "20.01.2021",
            "desc": "Intern; Inspire11, North Macedonia"
        } 
    ]
}
var data = eventsJSON;

ReactDOM.render(
    <Events events={data.events}/>,
    document.getElementById('timeline-events')
);
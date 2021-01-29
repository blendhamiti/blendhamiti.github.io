function Events(props) {
  var eventList = [];
  props.events.forEach(element => {
    eventList.push( /*#__PURE__*/React.createElement(Event, {
      event: element
    }));
  });
  return /*#__PURE__*/React.createElement("ul", {
    className: "line",
    "data-aos": "fade-in",
    "data-aos-once": "true"
  }, eventList);
}

function Event(props) {
  function getSize(size) {
    switch (size) {
      case 's':
        return 'small';

      case 'm':
        return 'medium';

      case 'l':
        return 'large';

      default:
        return 'medium';
    }
  }

  function getDirection(direction, shortNotation) {
    if (shortNotation) {
      if (direction) return 'r';else return 'l';
    } else {
      if (direction) return 'right';else return 'left';
    }
  }

  return /*#__PURE__*/React.createElement("li", {
    className: "size-" + getSize(props.event.size)
  }, /*#__PURE__*/React.createElement("div", {
    className: "direction-" + getDirection(props.event.direction, 1),
    "data-aos": "fade-" + getDirection(props.event.direction, 0),
    "data-aos-once": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flag-wrapper"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flag"
  }, props.event.title), /*#__PURE__*/React.createElement("span", {
    className: "time-wrapper"
  }, /*#__PURE__*/React.createElement("span", {
    className: "time"
  }, props.event.date))), /*#__PURE__*/React.createElement("div", {
    className: "desc"
  }, props.event.desc, /*#__PURE__*/React.createElement("br", null), props.event.location)));
}

eventsJSON = {
  "events": [{
    "size": "l",
    "direction": 1,
    "title": "Internship",
    "date": "20.01.2021",
    "desc": "Intern; Inspire11, North Macedonia"
  }, {
    "size": "s",
    "direction": 0,
    "title": "Internship",
    "date": "20.01.2021",
    "desc": "Intern; Inspire11, North Macedonia"
  }]
};
var data = eventsJSON;
ReactDOM.render( /*#__PURE__*/React.createElement(Events, {
  events: data.events
}), document.getElementById('timeline-events'));

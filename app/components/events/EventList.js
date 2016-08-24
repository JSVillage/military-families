import React from 'react';

const EventListItem = (props) => {

    const event = props.event;

    return <div>
      <div className="container">
        <li>
            <div className="events">
                <h4>{event.name}</h4>
                <h5>{event.description}</h5>
                <p>{event.eventAddress.street} {event.eventAddress.city} {event.eventAddress.state} </p> {event.eventAddress.zip}

                <p>{event.date}</p>
            </div>
        </li>
      </div>
    </div>

};

const EventList = (props) => <ul>
    {props.events.map(event => <EventListItem key={event.id} event={event}/>)
}
</ul>;

export default EventList;

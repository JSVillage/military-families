import React from 'react';

const EventListItem = (props) => {

	const event = props.event;

	return <li>
		<h4>{event.name}</h4>
		<p>{event.description}</p>
		<p>When: {event.date}</p>
		<p>Where:</p>
		<address>
			{event.eventAddress.street}<br />
			{event.eventAddress.city}<br />
			{event.eventAddress.state} {event.eventAddress.zip}<br />
		</address>
	</li>
};


const EventList = (props) => <ul>
	{
		props.events.map(event => <EventListItem key={event.id} event={event} />)
	}
</ul>;

export default EventList;
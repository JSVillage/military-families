import React from 'react';

const EventListItem = (props) => {

	const event = props.event;

	return <li>
		<h4>{event.name}</h4>
		<p>{event.description}</p>
		<p>When: {event.date}</p>
		<p>Where:</p>
		<address>
			{event.address.address}<br />
			{event.address.city}<br />
			{event.address.state} {event.address.zip}<br />
		</address>
	</li>
};


const EventList = (props) => <ul>
	{
		props.events.map(event => <EventListItem key={event.id} event={event} />)
	}
</ul>;

export default EventList;
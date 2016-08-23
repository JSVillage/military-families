import React from 'react';

const EventListItem = (props) => {

	const event = props.event;

	return <li>
		<div className = "events">
		<h4>{event.name}</h4>
		<p>{event.description}</p>
		<p>
				<span className="day">{event.cssday}</span>
				<span className="month">{event.cssmonth}</span>
				<span className="year">{event.cssyear}</span>
				<span className="time">12:00 AM</span>

		</p>
		<div className="info">
				<h2 className="title">{event.name}</h2>
				<h4 className="title">{event.eventAddress.city},{event.eventAddress.state}</h4>
		 <p className="desc">{event.description}</p>


		</div>
		</div>
	</li>
	/*
	<div className="container">
        <div className="row">
            <div className="col-xs-12 col-sm-offset-2 col-sm-8">
                <ul className="event-list">
                    <li>
                        <time datetime="2014-07-20 0000">
                            <span className="day">8</span>
                            <span className="month">Jul</span>
                            <span className="year">2014</span>
                            <span className="time">12:00 AM</span>
                        </time>
                        <div className="info">
                            <h2 className="title">Event Name</h2>
                            <h4 className="title">Event Location</h4>
                         <p className="desc">This is a description of the event.</p>


                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>

*/
};


const EventList = (props) => <ul>
	{
		props.events.map(event => <EventListItem key={event.id} event={event} />)
	}
</ul>;

export default EventList;

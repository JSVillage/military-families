import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import EventList from './EventList';

class EventsPage extends Component {

	constructor(props) {
		super(props);
	}

	render() {

		const position = [33.9, -112];

		return <div>
				<div className="col-sm-4">
					<EventList events={this.props.events} />
				</div>
				<div className="col-sm-8">
					<Link to="submit-event" className="btn btn-primary">Submit Event</Link>
					<Map center={position} zoom={13}>
					<TileLayer
						url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
						attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'/>
						<Marker position={position}>
							<Popup>
								<span>A pretty CSS3 popup.<br/>Easily customizable.</span>
							</Popup>
						</Marker>
					</Map>            	
				</div>
			</div>;
		}
	}

EventsPage.propTypes = {
	events: PropTypes.array.isRequired
};

EventsPage.defaultProps = {
	events: []
};

export default EventsPage;

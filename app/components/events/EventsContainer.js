import React, { Component, PropTypes } from 'react';
import * as actions from './eventActions';
import EventsPage from './EventsPage';

class EventsContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
        	events: []
        }
    }

    componentDidMount() {
    	actions.getEvents().then(data => {
    		const { events } = data;
    		this.setState({ events });
    	});
    }

    render() {
        return <EventsPage {...this.state} />;
    }
}

export default EventsContainer;
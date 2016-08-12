import React, { Component, PropTypes } from 'react';
import EventsPage from './EventsPage';

class EventsContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <EventsPage />;
    }
}

export default EventsContainer;

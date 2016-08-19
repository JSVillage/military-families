import React, { Component, PropTypes } from 'react';
import SubmitEventPage from './SubmitEventPage';

class SubmitEventContainer extends Component {

    constructor(props) {
        super(props);
    }

    submitEvent(eventData) {
        actions.submitEvent(eventData).then(response => {

        });
    }

    render() {
        return <SubmitEventPage submitEvent={this.submitEvent} />;
    }
}

export default SubmitEventContainer;
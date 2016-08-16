import React, {Component, PropTypes} from 'react';
import EventList from './EventList';

class EventsPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <div className="col-sm-4">
            	<EventList events={this.props.events} />
            </div>
            <div className="col-sm-8">
            	render map here...
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

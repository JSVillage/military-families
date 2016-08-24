import React, {Component, PropTypes} from 'react';
import * as actions from './actions';
import SubmitEventPage from './SubmitEventPage';

class SubmitEventContainer extends Component {

    constructor(props, context) {
        super(props, context);
        this.postEvent = this.postEvent.bind(this);
    }

    postEvent(model) {
        actions.postEvent(model).then(response => {
            if (response.status === 200) {
                this.context.router.push('/events');
            }
        });
    }

    render() {
        return <SubmitEventPage postEvent={this.postEvent}/>;
    }
}

SubmitEventContainer.contextTypes = {
    router: PropTypes.object
}

export default SubmitEventContainer;

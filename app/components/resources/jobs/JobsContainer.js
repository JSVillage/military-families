import React, { Component, PropTypes } from 'react';
import JobsPage from './JobsPage';

class JobsContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <JobsPage />;
    }
}

JobsContainer.propTypes = {};

export default JobsContainer;

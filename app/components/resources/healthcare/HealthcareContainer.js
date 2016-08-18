import React, { Component, PropTypes } from 'react';
import HealthcarePage from './HealthcarePage';

class HealthcareContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <HealthcarePage />;
    }
}

HealthcareContainer.propTypes = {};

export default HealthcareContainer;

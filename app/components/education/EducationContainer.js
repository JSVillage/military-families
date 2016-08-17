import React, { Component, PropTypes } from 'react';
import EducationPage from './EducationPage';

class EducationContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <EducationPage />;
    }
}

EducationContainer.propTypes = {};

export default EducationContainer;

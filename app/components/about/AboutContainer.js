import React, { Component, PropTypes } from 'react';
import AboutPage from './AboutPage';

class AboutContainer extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return <AboutPage />;
    }
}

AboutContainer.propTypes = {};

export default AboutContainer;
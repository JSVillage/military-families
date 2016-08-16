import React, { Component, PropTypes } from 'react';
import ResourcesPage from './ResourcesPage';

class ResourcesContainer extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return <ResourcesPage />;
    }
}

ResourcesContainer.propTypes = {};

export default ResourcesContainer;
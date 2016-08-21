import React, { Component, PropTypes } from 'react';
import * as actions from './actions';
import ServicesPage from './ServicesPage';

class ServicesContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            services: []
        };
    }

    componentDidMount() {
        actions.getServices().then(response => {
            const services = response.filter(service => service.state === "AZ");
            this.setState({ services });
        });
    }

    render() {
        return <ServicesPage {...this.state} />;
    }
}

export default ServicesContainer;

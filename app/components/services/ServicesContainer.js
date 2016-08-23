import React, { Component, PropTypes } from 'react';
import * as actions from './actions';
import ServicesPage from './ServicesPage';

class ServicesContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            programs: {}
        };
    }

    groupProgramsByFacility(prev, current) {

        if (!prev.hasOwnProperty(current.facilityName)) {
            prev[current.facilityName] = {
                facilityName: current.facilityName,
                address: `${current.address} ${current.city} ${current.state} ${current.zip}`,
                programs: [current.program]
            }                              
        } 
        else {
            if (prev[current.facilityName].programs.indexOf(current.program) === -1) {
                prev[current.facilityName].programs.push(current.program);
            }          
        }

        return prev;
    }

    componentDidMount() {
        actions.getServices().then(response => {
            const programs = response
                                .filter(service => service.state === "AZ")
                                .reduce((prev, current) => this.groupProgramsByFacility(prev, current), {});

            this.setState({ programs });
        });
    }

    render() {
        return <ServicesPage {...this.state} />;
    }
}

export default ServicesContainer;

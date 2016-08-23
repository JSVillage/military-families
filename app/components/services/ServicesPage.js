import React, { Component, PropTypes } from 'react';
import FacilityCard from './FacilityCard';

class ServicesPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const facilityCards = Object.keys(this.props.programs).map((key, index) => <FacilityCard key={index} facility={this.props.programs[key]} />)          
        return <div className="services">
            <h1>PTSD Service Providers in Arizona</h1>
            <p>The following is a list of PTSD programs recognized by the Department of Veterans Affairs</p>
            <div className="container-fluid">
                <div className="row">
                    {facilityCards}
                </div>
            </div>
        </div>;
    }
}

ServicesPage.displayName = "ServicesPage";

ServicesPage.propTypes = {
    programs: PropTypes.object.isRequired
};

export default ServicesPage;
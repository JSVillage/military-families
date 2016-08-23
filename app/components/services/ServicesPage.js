import React, { Component, PropTypes } from 'react';
import FacilityCard from './FacilityCard';

class ServicesPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const facilityCards = Object.keys(this.props.programs).map((key, index) => <FacilityCard key={index} facility={this.props.programs[key]} />)          
        return <div>
            <h1>PTSD services providers in Arizona</h1>
            {facilityCards}
        </div>;
    }
}

ServicesPage.displayName = "ServicesPage";

ServicesPage.propTypes = {
    programs: PropTypes.object.isRequired
};

export default ServicesPage;
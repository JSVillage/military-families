import React, { Component, PropTypes } from 'react';
import FacilityCard from './FacilityCard';

class ServicesPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return <div className="services">
            <h1>PTSD Services in Arizona</h1>
            <p>The following is a list of PTSD programs recognized by the Department of Veterans Affairs</p>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        {
                            this.props.services.map((service, index) =>
                                <div key={index}> 
                                    <p>{service.program}</p>
                                    <p>{service.facilityName}</p>
                                    <p>{service.address}</p> 
                                    <p>display additional properties such as city, state, etc...</p>                                                                               
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>

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
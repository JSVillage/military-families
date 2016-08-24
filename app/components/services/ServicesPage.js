import React, { Component, PropTypes } from 'react';
import FacilityCard from './FacilityCard';

class ServicesPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const facilityCards = Object.keys(this.props.programs).map((key, index) => <FacilityCard key={index} facility={this.props.programs[key]} />)
        return <div className="services">
            <div id="services-header">
                <h1>PTSD Service Providers in Arizona</h1>
                <p>The following is a list of PTSD programs recognized by the Department of Veterans Affairs. According to the VA's website, <i>"All VA Medical Centers offer PTSD treatment,
                even if there is no specific PTSD program... Many Vet Centers and VA Community Based Outpatient Clinics also offer PTSD treatment." </i>
                Contact one of the medical centers listed below and ask for the Mental Health Clinic. A full list of Arizona's clinics, Vet Centers and Medical Centers can be found
                <a href="http://www.va.gov/directory/guide/state.asp?STATE=AZ&dnum=ALL" target="_blank"> here</a>.
                A nationwide list of VA Medical Centers can be found <a href="http://www.va.gov/directory/guide/home.asp" target="_blank">here</a>.</p>
            </div>
            <div className="container-fluid">
                <div className="row">
                    {facilityCards}
                </div>
            </div>
            <div className="push">
            </div>
        </div>;
    }
}

ServicesPage.displayName = "ServicesPage";

ServicesPage.propTypes = {
    programs: PropTypes.object.isRequired
};

export default ServicesPage;

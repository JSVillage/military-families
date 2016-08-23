import React, { Component, PropTypes } from 'react';

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
        </div>;
    }
}

ServicesPage.displayName = "ServicesPage";

ServicesPage.propTypes = {
    services: PropTypes.array.isRequired
};

export default ServicesPage;
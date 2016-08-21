import React, { Component, PropTypes } from 'react';

class ServicesPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <h1>Services Page </h1>
            <div className="container">
                <div className="row text-center">
                    <div className="list-group">
                        <a href="#" className="list-group-item">What's this for?</a>
                        <div className="col-md-3">
                            What is this container for?
                        </div>
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
            </div>
        </div>;
    }
}

ServicesPage.displayName = "ServicesPage";

ServicesPage.propTypes = {
    services: PropTypes.array.isRequired
};

export default ServicesPage;
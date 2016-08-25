import React, {Component, PropTypes} from 'react';

class HealthcarePage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div>

          <div className="resources jobs">
            <h1><i className="fa fa-medkit icon" aria-hidden="true"></i>Health Care</h1>

            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <h2 className="heading">Local Resources</h2>
                  <h3>Military/Veteran Employment Resource Center</h3>
                  <p>Arizona Department of Veteran's Services</p>
                  <p>(602) 255-3373</p>
                  <p>3839 N 3rd St <br/>
                     Phoenix, AZ 85012</p>

                  <h3>Military/Veteran Employment Resource Center</h3>
                  <p>(602) 267-2534</p>
                  <p>1335 N. 52nd Street <br/>
                    Phoenix, AZ 85008</p>
                </div>

                <div className="col-md-6">

                  <h2 className="heading">Online Resources</h2>

                  <h3><a href="https://dvs.az.gov/services/employment">Arizona Department of Veteran's Services</a></h3>
                  <a className="click" href="https://dvs.az.gov/services/employment">Click here!</a>
                  <p>Mission Statement <br/> The Arizona Department of Veterans Services is actively working to
                    ensure every Veteran and Service Member comes home to a job. Whether you're wishing to work
                    for an established employer or start your own business, the Arizona Department of Veterans Services
                    is compiling the tools and information to help you secure your economic well being.</p>

                  <h3><a href="http://www.military.com/veteran-jobs">Military.com Veteran Employment Center</a></h3>
                  <a className="click" href="http://www.military.com/veteran-jobs">Click here!</a>
                  <p>Search engine and resources to find military-friendly jobs.<h2>Title</h2>
                  <h3>Link</h3>
                  <h3>Phone Number</h3>
                  <p>Content (already in p tags in json)</p>

                  
                </div>
              </div>
            </div>


        </div>
      </div>;
    }
}

HealthcarePage.propTypes = {};

export default HealthcarePage;

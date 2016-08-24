import React, {Component, PropTypes} from 'react';

class JobsPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div>

          <div className="resources jobs">
            <h1><i className="fa fa-briefcase icon" aria-hidden="true"></i>Jobs</h1>

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
                  <p>Mission Statement <br/> The Arizona Department of Veterans Services is actively working to
                    ensure every Veteran and Service Member comes home to a job. Whether you're wishing to work
                    for an established employer or start your own business, the Arizona Department of Veterans Services
                    is compiling the tools and information to help you secure your economic well being.</p>

                  <h3><a href="http://www.military.com/veteran-jobs">Military.com Veteran Employment Center</a></h3>
                  <p>Search engine and resources to find military-friendly jobs.</p>

                </div>
              </div>
            </div>


        </div>
      </div>;
    }
}


JobsPage.propTypes = {};

export default JobsPage;

import React, {Component, PropTypes} from 'react';

class JobsPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div>
          <div className="resources">
            <div className="container">

              <h1><i className="fa fa-briefcase icon" aria-hidden="true"></i>Jobs</h1>

                <h2><a href="https://dvs.az.gov/services/employment">Arizona Department of Veteran's Services</a></h2>
                <h3><a href="https://dvs.az.gov/services/employment">https://dvs.az.gov/services/employment</a></h3>
                <p></p>

                <h2><a href="http://www.military.com/veteran-jobs">Military.com Veteran Employment Center</a></h2>
                <h3><a href="http://www.military.com/veteran-jobs">http://www.military.com/veteran-jobs</a></h3>
                <p>Search engine and resources to find military-friendly jobs.</p>

              <div>
                <h2>Local Resources</h2>
                <h3>Phone Number</h3>
                <p>Content (already in p tags in json)</p>
              </div>

              <div>
                <h2>Online Resources</h2>
                <h3><a href="https://dvs.az.gov/services/employment">Arizona Department of Veteran's Services</a></h3>
                <h4><a href="https://dvs.az.gov/services/employment">https://dvs.az.gov/services/employment</a></h4>
                <p>Mission Statement <br/> The Arizona Department of Veterans Services is actively working to
                  ensure every Veteran and Service Member comes home to a job. Whether you're wishing to work
                  for an established employer or start your own business, the Arizona Department of Veterans Services
                  is compiling the tools and information to help you secure your economic well being.</p>
              </div>




            <p>Contact Information

Military/Veteran Employment Resource Center
Arizona Department of Veterans’ Services
3839 N 3rd St, Phoenix, AZ 85012
(602) 255-3373

Military/Veteran Employment Resource Center
1335 N. 52nd Street Phoenix, AZ 85008
602-267-2534</p>

            </div>
        </div>
      </div>;
    }
}

JobsPage.propTypes = {};

export default JobsPage;

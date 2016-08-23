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

            <h2>Title</h2>
            <h3>Link</h3>
            <h3>Phone Number</h3>
            <p>Content (already in p tags in json)</p>

            https://dvs.az.gov/services/employment

            http://www.military.com/veteran-jobs

            Contact Information
Military/Veteran Employment Resource Center
Arizona Department of Veterans’ Services
3839 N 3rd St, Phoenix, AZ 85012
(602) 255-3373
Military/Veteran Employment Resource Center
1335 N. 52nd Street Phoenix, AZ 85008
602-267-2534

            </div>
        </div>
      </div>;
    }
}

JobsPage.propTypes = {};

export default JobsPage;

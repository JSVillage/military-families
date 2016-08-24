import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

class ResourcesPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div>
          <div className="resources">

            <h1>Resources</h1>

            <div className="container">
                <div className="row text-center">
                    <div className="col-md-3">
                        <Link to="/resources/funding">
                            <i className="fa fa-dollar fa-4x" aria-hidden="true"></i>
                            <h4 className="heading">Funding</h4>
                        </Link>
                        <p>Phasellizzle its fo rizzle volutpizzle tellizzle. Sizzle sizzle adipiscing lorem. Donizzle owned est.</p>
                    </div>
                    <div className="col-md-3">
                        <Link to="/resources/education">
                            <i className="fa fa-university fa-4x" aria-hidden="true"></i>
                            <h4 className="heading">Education</h4>
                        </Link>
                        <p>Phasellizzle its fo rizzle volutpizzle tellizzle. Sizzle sizzle adipiscing lorem. Donizzle owned est.</p>
                    </div>
                    <div className="col-md-3">
                        <Link to="/resources/healthcare">
                            <i className="fa fa-medkit fa-4x" aria-hidden="true"></i>
                            <h4 className="heading">Healthcare</h4>
                        </Link>
                        <p>Phasellizzle its fo rizzle volutpizzle tellizzle. Sizzle sizzle adipiscing lorem. Donizzle owned est.</p>
                    </div>
                    <div className="col-md-3">
                        <Link to="/resources/jobs">
                            <i className="fa fa-briefcase fa-4x" aria-hidden="true"></i>
                            <h4 className="heading">Jobs</h4>
                        </Link>
                        <p>Phasellizzle its fo rizzle volutpizzle tellizzle. Sizzle sizzle adipiscing lorem. Donizzle owned est.</p>
                    </div>
                </div>

            </div>

        </div>
      </div>;
    }
}

ResourcesPage.propTypes = {};

export default ResourcesPage;

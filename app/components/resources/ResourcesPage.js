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
                        <p>Everyone needs financial help at some point in their lives.
                          These sites will help with financial issues that often come up after returning from duty.</p>
                    </div>

                    <div className="col-md-3">
                        <Link to="/resources/education">
                            <i className="fa fa-university fa-4x" aria-hidden="true"></i>
                            <h4 className="heading">Education</h4>
                        </Link>
                        <p>Schools can often provide a community to help to handle the lifestyle changes veterans experience when coming home from active duty.
                        There are many resources for veterans interested in furthering their education.</p>
                    </div>

                    <div className="col-md-3">
                        <Link to="/resources/healthcare">
                            <i className="fa fa-medkit fa-4x" aria-hidden="true"></i>
                            <h4 className="heading">Healthcare</h4>
                        </Link>
                        <p>The V.A. helps with medical issues for both veterans and their family members.
                        Outside sources can be hard to find, but they are available through the right channels.</p>
                    </div>

                    <div className="col-md-3">
                        <Link to="/resources/jobs">
                            <i className="fa fa-briefcase fa-4x" aria-hidden="true"></i>
                            <h4 className="heading">Jobs</h4>
                        </Link>
                        <p>The job market can seem like a roller coaster. Here are some great sites to help
                        you get a great job that utilizes the valuable skills you learned while serving our country.</p>
                    </div>
                </div>

            </div>

        </div>
      </div>;
    }
}

ResourcesPage.propTypes = {};

export default ResourcesPage;

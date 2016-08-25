import React, {Component, PropTypes} from 'react';

class JobsPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div>

        <div className="resources jobs">
        <h1><i className="fa fa-medkit icon" aria-hidden="true"></i>Jobs</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="panel jobs">
                <div className="panel-heading">
                  <h3><a href="https://dvs.az.gov/services/employment" target="_blank">Arizona Department of Veteran's Services</a></h3>
                  <a className="click" href="https://dvs.az.gov/services/employment" target="_blank">Click here!</a>
                </div>
                <div className="panel-body">
                  <p>Mission Statement <br/> The Arizona Department of Veterans Services is actively working to
                  ensure every Veteran and Service Member comes home to a job. Whether you're wishing to work
                  for an established employer or start your own business, the Arizona Department of Veterans Services
                    is compiling the tools and information to help you secure your economic well being.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="panel jobs">
                <div className="panel-heading">
                  <h3><a href="http://www.military.com/veteran-jobs" target="_blank">Military.com Veteran Employment Center</a></h3>
                  <a className="click" href="http://www.military.com/veteran-jobs" target="_blank">Click here!</a>
                </div>
                <div className="panel-body">
                  <p>Search engine and resources to find military-friendly jobs.</p>
                </div>
            </div>
            </div>
            <div className="col-md-4">
              <div className="panel jobs">
                <div className="panel-heading">
                  <h3>Military/Veteran Employment Resource Center</h3>
                </div>
                <div className="panel-body">
                  <p>Arizona Department of Veteran's Services</p>
                  <p>(602) 255-3373</p>
                  <p>3839 N 3rd St <br/>
                  Phoenix, AZ 85012</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="panel jobs">
                <div className="panel-heading">
                  <h3>Military/Veteran Employment Resource Center</h3>
                </div>
                <div className="panel-body">
                  <p>(602) 267-2534</p>
                  <p>1335 N. 52nd Street <br/>
                  Phoenix, AZ 85008</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>;
    }
}


JobsPage.propTypes = {};

export default JobsPage;

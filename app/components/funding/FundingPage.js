import React, {Component, PropTypes} from 'react';

class FundingPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div>
          <div className="resources">

            <i text-align="center" className="fa fa-dollar fa-4x" aria-hidden="true"></i>
            <h1>Funding</h1>

            <div className="container">
                <div className="row text-center">
                    <div className="col-md-3">
                        <a href="#">
                            <i className="fa fa-dollar fa-4x" aria-hidden="true"></i>
                            <h4>Funding</h4>
                        </a>
                        <p>Phasellizzle its fo rizzle volutpizzle tellizzle. Sizzle sizzle adipiscing lorem. Donizzle owned est.</p>
                    </div>
                    <div className="col-md-3">
                        <a href="#">
                            <i className="fa fa-university fa-4x" aria-hidden="true"></i>
                            <h4>Education</h4>
                        </a>
                        <p>Phasellizzle its fo rizzle volutpizzle tellizzle. Sizzle sizzle adipiscing lorem. Donizzle owned est.</p>
                    </div>
                    <div className="col-md-3">
                        <a href="#">
                            <i className="fa fa-medkit fa-4x" aria-hidden="true"></i>
                            <h4>Healthcare</h4>
                        </a>
                        <p>Phasellizzle its fo rizzle volutpizzle tellizzle. Sizzle sizzle adipiscing lorem. Donizzle owned est.</p>
                    </div>
                    <div className="col-md-3">
                        <a href="#">
                            <i className="fa fa-briefcase fa-4x" aria-hidden="true"></i>
                            <h4>Jobs</h4>
                        </a>
                        <p>Phasellizzle its fo rizzle volutpizzle tellizzle. Sizzle sizzle adipiscing lorem. Donizzle owned est.</p>
                    </div>
                </div>

            </div>

        </div>
      </div>;
    }
}

FundingPage.propTypes = {};

export default FundingPage;

import React, {Component, PropTypes} from 'react';

class HealthcarePage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <div>

      <div className="resources health">
        <h1><i className="fa fa-medkit icon" aria-hidden="true"></i>Health Care</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="panel health">
                <div className="panel-heading">
                  <h3><a href="http://store.samhsa.gov/product/Arizona-State-Resource-Guide/SRG-AZ">State Mental Health Resources for Arizona</a></h3>
                  <a className="click" href="http://store.samhsa.gov/product/Arizona-State-Resource-Guide/SRG-AZ">Click here!</a>
                </div>
                <div className="panel-body">
                  <p>Lists of mental health facilities and services, substance abuse treatment facilities, suicide prevention programs and organizations that provide professional advocacy protection, family support programs, financing information and self-help groups in Arizona.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="panel health">
                <div className="panel-heading">
                  <h3><a href="http://www.namiaz.org/">National Alliance on Mental Illness (NAMI) - Arizona</a></h3>
                  <a className="click" href="http://www.namiaz.org/">Click here!</a>
                </div>
                <div className="panel-body">
                  <p>Provides education, support and advocacy for persons with mental illnesses, their families and the wider community in order to improve quality of life.</p>
                </div>
            </div>
            </div>
            <div className="col-md-4">
              <div className="panel health">
                <div className="panel-heading">
                  <h3><a href="https://www.sbhservices.org/#Area">Southwest Behavioral & Health Services</a></h3>
                  <a className="click" href="https://www.sbhservices.org/#Area">Click here!</a>
                </div>
                <div className="panel-body">
                  <p>We inspire people to feel better and reach their potential. Through helping people discover their strengths, we improve our communities.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="panel health">
                <div className="panel-heading">
                  <h3><a href="http://www.ptsd.va.gov/">Dept. of Veteran Affairs National Center for PTSD</a></h3>
                  <a className="click" href="http://www.ptsd.va.gov/">Click here!</a>

                </div>
                <div className="panel-body">
                  <p>The National Center for PTSD is dedicated to research and education on trauma and PTSD. We work to assure that the latest research findings help those exposed to trauma.</p>
                </div>

                </div>
                </div>
              </div>
            </div>
          </div>


    </div>;
  }
}

HealthcarePage.propTypes = {};

export default HealthcarePage;

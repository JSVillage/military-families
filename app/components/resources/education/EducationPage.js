import React, {Component, PropTypes} from 'react';

class EducationPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div>
          <div className="resources">
            <div className="container">

            <h1><i className="fa fa-university icon" aria-hidden="true"></i>Education</h1>

            <h2 className="heading">Arizona Specific Educational Benefits</h2>
            <p>(From this <a href="http://www.military.com/education/money-for-school/state-veteran-benefits-rockies-and-southwest.html#arizona">site</a>)</p>
            <div className="row">
              <div className="col-md-12">
                <div className="panel education">
                  <div className="panel-heading">
                    <h3 className="heading"> Arizona Tuition and Fees-Deferred Payment</h3>
                  </div>
                  <div className="panel-body">
                    <p>A veteran or eligible dependent who has applied for educational benefits under the G. I. Bill state-supported
                    community colleges, colleges and universities may defer payment of tuition, fees and required books for a period
                    of 120 days with no interest charges. If, at the end of such period, the person has not received from the U.S.
                    Department of Veterans Affairs the initial benefit monies for tuition and fees, an extension may be granted
                    until such time benefits are received.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="panel education">
                  <div className="panel-heading">
                    <h3 className="heading">Tuition Waivers for War-Wounded and Dependents of Killed in Action</h3>
                  </div>
                  <div className="panel-body">
                     <p>A former member of the Arizona National Guard who received a purple heart citation
                     on or after September 11, 2001 (who was medically discharged because of a service-connected injury)
                     is eligible for a tuition waiver. A tuition waiver for Arizona community colleges and universities is
                     also available to a dependent of the national guard member or member of the United States armed forces
                     who was a resident of the state of Arizona or stationed in Arizona and who was killed in the line of duty
                     or who died from injuries suffered in the line of duty while traveling to or from duty.</p>
                     <p>Click the link for more information on <a href="https://dvs.az.gov/veterans">veterans benefits offered by Arizona</a>.</p>
                  </div>
                </div>
              </div>
            </div>


            <h2 className="heading">Online Resources</h2>
            <div className="row">
              <div className="col-md-12">
                <div className="panel education">
                  <div className="panel-heading">
                    <h3 className="heading">G.I. Bill Information</h3>
                    <p><a href="http://www.military.com/education/gi-bill/learn-to-use-your-gi-bill.html">Click here!</a></p>
                  </div>
                  <div className="panel-body">
                    <p>"The term GI Bill refers to any Department of Veterans Affairs education benefit earned by members of Active Duty, Selected Reserve
                    and National Guard Armed Forces and their families. The benefit is designed to help service members and eligible veterans cover the
                    costs associated with getting an education or training."</p>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="panel education">
                  <div className="panel-heading">
                    <h3 className="heading">Tuition Assistance</h3>
                    <p><a href="http://www.military.com/education/money-for-school">Click here!</a></p>
                  </div>
                  <div className="panel-body">
                     <p>Army: The Army offers several programs to support your education goals including 100% Tuition Assistance for college courses.</p>
                     <p>Navy: The Navy offers several programs to support your education goals including up to 100% Tuition Assistance for college courses.</p>
                     <p>Air Force: The Air Force offers several programs to support your education goals including 100% Tuition Assistance for college courses.</p>
                     <p>Marine Corps: The Marine Corps offers several programs to support your education goals including 100% Tuition Assistance for college courses.</p>
                     <p>Coast Guard: The Coast Guard offers several programs to support your education goals including Tuition Assistance.</p>
                     <p>Reserve: Many members of the Selected Reserve are eligible for up to 100% Tuition Assistance for college courses.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
         </div>
      </div>;
    }
}

EducationPage.propTypes = {};

export default EducationPage;

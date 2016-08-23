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

            <h2>Title</h2>
            <h4>Link</h4>
            <h4>Phone Number</h4>
            <p>Content (already in p tags in json)</p>

          <p>http://www.military.com/education/gi-bill/learn-to-use-your-gi-bill.html
          http://www.military.com/education/money-for-school

          http://www.military.com/education/money-for-school/state-veteran-benefits-rockies-and-southwest.html#arizona
          Arizona
Tuition and Fees-Deferred Payment
A veteran or eligible dependent who has applied for educational benefits under the G. I. Bill state-supported community colleges, colleges and universities may defer payment of tuition, fees and required books for a period of 120 days with no interest charges. If, at the end of such period, the person has not received from the U.S. Department of Veterans Affairs the initial benefit monies for tuition and fees, an extension may be granted until such time benefits are received.

Tuition Waivers for War-Wounded and Dependents of Killed in Action
A former member of the Arizona National Guard who received a purple heart citation on or after September 11, 2001 (who was medically discharged because of a service-connected injury) is eligible for a tuition waiver. A tuition waiver for Arizona community colleges and universities is also available to a dependent of the national guard member or member of the United States armed forces who was a resident of the state of Arizona or stationed in Arizona and who was killed in the line of duty or who died from injuries suffered in the line of duty while traveling to or from duty.

Click the link for more information on veterans benefits offered by Arizona.</p>



            </div>
         </div>
      </div>;
    }
}

EducationPage.propTypes = {};

export default EducationPage;

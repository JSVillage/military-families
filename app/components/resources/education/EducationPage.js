import React, {Component, PropTypes} from 'react';

class EducationPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div>
          <div className="resources">
            <div className="container">
            <i className="fa fa-university fa-4x" aria-hidden="true"></i>
            <h1>Education</h1>

            </div>
         </div>
      </div>;
    }
}

EducationPage.propTypes = {};

export default EducationPage;

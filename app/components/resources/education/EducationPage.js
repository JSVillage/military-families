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

            </div>
         </div>
      </div>;
    }
}

EducationPage.propTypes = {};

export default EducationPage;

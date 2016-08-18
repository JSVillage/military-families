import React, {Component, PropTypes} from 'react';

class HealthcarePage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div>
          <div className="resources">

            <i className="fa fa-medkit fa-4x" aria-hidden="true"></i>
            <h1>Health Care</h1>

            <h3>Title</h3>
            <h2>Link</h2>
            <h2>Phone Number</h2>
            <p>Content (already in p tags in json)</p>




        </div>
      </div>;
    }
}

HealthcarePage.propTypes = {};

export default HealthcarePage;

import React, {Component, PropTypes} from 'react';

class JobsPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div>
          <div className="resources">
            <div className="container">

            <h1><i className="fa fa-medkit icon" aria-hidden="true"></i>Jobs</h1>

            <h2>Title</h2>
            <h3>Link</h3>
            <h3>Phone Number</h3>
            <p>Content (already in p tags in json)</p>

            </div>
        </div>
      </div>;
    }
}

JobsPage.propTypes = {};

export default JobsPage;

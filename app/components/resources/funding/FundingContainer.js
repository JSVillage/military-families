import React, { Component, PropTypes } from 'react';
import FundingPage from './FundingPage';

class FundingContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <FundingPage />;
    }
}

FundingContainer.propTypes = {};

export default FundingContainer;

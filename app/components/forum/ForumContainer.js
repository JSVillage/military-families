import React, { Component, PropTypes } from 'react';

import ForumPage from './ForumPage';


class ForumContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
          answers: []
        }
    }


    render() {
        return <ForumPage />;
    }
}



export default ForumContainer;

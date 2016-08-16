import React, { Component, PropTypes } from 'react';
import ForumAnswers from './ForumAnswers';
import * as actions from './ForumAction';

class ForumAnswersContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
          question: [],
          answers: []
        }
    }


    render() {
        return <ForumAnswers />;
    }
}



export default ForumAnswersContainer;

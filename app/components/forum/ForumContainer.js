import React, {Component, PropTypes} from 'react';
import * as actions from './forumAction';
import ForumPage from './ForumPage';

class ForumContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: []
        };
        this.postQuestion = this.postQuestion.bind(this);
    }
    postQuestion(model) {
        actions.postQuestion(model).then(response => {
            const questions = this.state.questions.concat([response]);
            this.setState({questions});
        });
    }
    componentDidMount() {
        actions.getQuestions().then(response => {
            this.setState({questions: response});
        });
    }
    render() {
        return <ForumPage {...this.state} postQuestion={this.postQuestion}/>;
    }
}

export default ForumContainer;

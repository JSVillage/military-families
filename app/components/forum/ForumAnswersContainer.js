import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import * as actions from './forumAction';

class ForumAnswersContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answers: []
        };
    }

    componentDidMount() {
        const forumId = this.props.routeParams.forumId;
        actions.getAnswers(forumId).then(response => {
            this.setState({ answers: response });
        });
    }

    render() {
        return <div>
            <table className="table forum table-striped">
                <thead>
                    <tr>
                        <th className="cell-stat"></th>
                        <th>
                            <h3>Question goes here: {this.props.routeParams.forumId}</h3>
                        </th>
                    </tr>
                </thead>
                <tbody>

                {
                    this.state.answers.map((answer, index) => 
                        <tr key={index}>
                            <td className="text-center hidden-xs hidden-sm">
                                <p>{answer.userAnswers}</p>
                                <p><i>Posted on {answer.date}</i></p>
                            </td>
                        </tr>                    
                    )
                }

                </tbody>
            </table>
        </div>
    } 
}

ForumAnswersContainer.propTypes = {};

export default ForumAnswersContainer;

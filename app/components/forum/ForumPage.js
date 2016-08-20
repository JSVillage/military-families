import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';

class ForumPage extends Component {

    constructor(props) {
        super(props);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit(event) {
        event.preventDefault();
        const model = {
            question: this.refs.question.value
        };
        this.props.postQuestion(model);
    }

    render() {
        return <div>
            <div className="container">
                <div className="page-header page-heading">
                    <div className="clearfix"> </div>
                    <h1>Forum</h1>
                </div>
                <p className="lead">This is the right place to discuss any ideas, critics, feature requests and all the ideas regarding our website. Please follow the forum rules and always check FAQ before posting to prevent duplicate posts.</p>
                <table className="table forum table-striped">
                    <thead>
                        <tr>
                            <th>Topics</th>
                            <th>Posts</th>
                            <th>Last Post</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.questions.map(question => 
                                <tr key={question.id}>
                                    <td><Link to={`forum/${question.id}`}>{question.question}</Link></td>
                                    <td>{question.description}</td>
                                    <td>{question.presentDate}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                <div>
                    <form className="form-horizontal" onSubmit={this.handleFormSubmit}>
                        <textarea ref="question" />
                        <button>Ask</button>
                    </form>
                </div>
            </div>
        </div>;
    }
}

ForumPage.propTypes = {};

export default ForumPage;

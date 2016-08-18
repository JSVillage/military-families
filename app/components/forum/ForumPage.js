import React, {Component, PropTypes} from 'react';

class ForumPage extends Component {

    constructor(props) {
        super(props);
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
                            <th className="cell-stat"></th>
                            <th>
                                <h3>Find Support</h3>
                            </th>
                            <th className="cell-stat text-center hidden-xs hidden-sm">Topics</th>
                            <th className="cell-stat text-center hidden-xs hidden-sm">Posts</th>
                            <th className="cell-stat-2x hidden-xs hidden-sm">Last Post</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-center">
                                <i className="fa fa-question fa-2x text-primary"></i>
                            </td>
                            <td>
                                <h4>
                                    <a href="#s"> QUESTION GOES HERE </a>
                                    <br></br>
                                    <small> Some description </small>
                                </h4>
                            </td>

                            <td className="hidden-xs hidden-sm">
                                <small>
                                    <i className="fa fa-clock-o"></i>
                                    time  goes here</small>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>;
    }
}

ForumPage.propTypes = {};

export default ForumPage;

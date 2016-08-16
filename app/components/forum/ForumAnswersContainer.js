import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import * as actions from './ForumAction';

class ForumAnswers extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <table className="table forum table-striped">
                <thead>
                    <tr>
                        <th className="cell-stat"></th>
                        <th>
                            <h3>Question goes here</h3>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-center">
                            <i className="fa fa-question fa-2x text-primary"></i>
                        </td>
                        <td>
                            <h2>Title goes here</h2>
                        </td>
                        <td className="text-center hidden-xs hidden-sm">
                            <p>Quisque rutrum sem at tempus fringilla. Pellentesque quis fringilla tortor. Praesent fringilla maximus magna sed maximus. Maecenas quis pellentesque ante. Cras tempus finibus ex nec tempus. Sed eleifend diam id tincidunt imperdiet. Vivamus euismod et elit id maximus. Donec efficitur posuere mi, sed feugiat ligula pulvinar sit amet.
                            </td>
                            <td className="text-center hidden-xs hidden-sm">
                                <a href="#">89 897</a>
                            </td>
                            <td className="hidden-xs hidden-sm">
                                <small>
                                    <i className="fa fa-clock-o"></i>
                                    3 months ago</small>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
            } } ForumAnswers.propTypes = {};

        export default ForumAnswers;
}

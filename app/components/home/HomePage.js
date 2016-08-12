import React, {Component, PropTypes} from 'react';

class HomePage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <h1>Home Page</h1>
            <h3>Lets do this
            </h3>
            <img src="https://images4.alphacoders.com/248/248974.jpg" width="700" height="500"></img>
        </div>;
    }
}

HomePage.propTypes = {};

export default HomePage;

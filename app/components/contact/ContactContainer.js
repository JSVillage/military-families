import React, { Component, PropTypes } from 'react';
import ContactPage from './ContactPage';

class ContactContainer extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return <ContactPage />;
    }
}

ContactContainer.propTypes = {};

export default ContactContainer;
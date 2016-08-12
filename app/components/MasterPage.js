import React from 'react';
import {Link} from 'react-router';

class MasterPage extends React.Component {

    render() {
        return <div>
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <p className="navbar-text">
                            <a href="/" className="navbar-link">Title</a>
                        </p>
                    </div>
                    <div className="navbar-collapse collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/services">Services</Link>
                            </li>
                            <li>
                                <Link to="/events">Events</Link>
                            </li>
                            <li>
                                <Link to="/forum">Forum</Link>
                            </li>

                            <li>
                                <Link to="/about">About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>            
            {this.props.children}
            <div className="push"/>
            <footer className="text-center">
                &copy JavaScript Village 2016
            </footer>
        </div>;
    }
}

export default MasterPage;

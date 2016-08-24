import React from 'react';
import {Link} from 'react-router';

class MasterPage extends React.Component {

    render() {
        return <div>
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-collapse" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>

                        <a href="/" className="navbar-brand"> <i className="fa fa-heartbeat" aria-hidden="true"></i> Veteran Support</a>
                        
                    </div>
                    <div className="navbar-collapse collapse" id="bs-collapse">
                        <ul className="nav navbar-nav navbar-right">
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
                                <Link to="/resources">Resources</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {this.props.children}

            <footer className="text-center">
                <p>&copy; JavaScript Village 2016</p>
            </footer>
        </div>;
    }
}

export default MasterPage;

import React, { Component, PropTypes } from 'react';

class AboutPage extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
        	
        	<div className="container">
        		<h1>About Us</h1>
            	
            	<div className="row">
            		<div className="col-md-6">
            			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac tortor quis ligula lacinia ullamcorper. Aenean ac orci lectus. Duis nisi nunc, fringilla eget porttitor sed, convallis vel nisl. Aliquam nulla neque, congue id neque a, imperdiet rutrum mauris. Suspendisse accumsan neque eget justo efficitur pretium. Nulla scelerisque felis eget augue interdum accumsan. Integer rhoncus mauris vitae volutpat cursus. Vivamus condimentum odio leo, nec facilisis felis tempor quis. Mauris sapien orci, faucibus nec purus sit amet, volutpat sodales sapien. Phasellus nec tempor elit. Vivamus at accumsan nunc. Proin ac quam lectus. Phasellus tincidunt arcu ac interdum ultrices.</p>
            			<p>Nam mauris nunc, volutpat in felis vel, dapibus ullamcorper ex. Pellentesque varius augue libero. Nam rhoncus libero eget dui lacinia feugiat. In non mattis ipsum, eget condimentum ante. Nam euismod, libero in maximus placerat, tortor velit euismod tellus, sed bibendum justo nisi tristique nunc. Phasellus feugiat ornare efficitur. Morbi convallis in ex vitae congue. Praesent consequat elit risus, non consequat orci placerat vehicula.</p>
            			<p>Phasellus tincidunt vitae mauris nec dapibus. Pellentesque at libero eget massa ultricies porta nec non ex. Vivamus eget pretium velit. Donec porta, nulla sit amet dapibus bibendum, metus risus ullamcorper elit, id sollicitudin nisl felis eget lacus. Nullam luctus libero et facilisis blandit. Sed posuere elit a maximus commodo. Donec non porttitor erat, eget tempor nulla. Nunc consequat convallis lacus vel condimentum. Mauris a tincidunt tortor. Proin tincidunt turpis hendrerit elementum eleifend. Duis hendrerit quam neque, quis auctor ante posuere sed. Nulla ac placerat purus.</p>
            		</div>
            		<div className="col-md-offset-1 col-md-5">
            			<img className="img-responsive about-photo" src="http://placehold.it/550x350"/>
            			<img className="img-responsive about-photo" src="http://placehold.it/550x250"/>
            			<div id="social-icons">
	            			<i className="fa fa-google-plus-square fa-3x social-icon" aria-hidden="true"></i>
	            			<i className="fa fa-facebook-square fa-3x social-icon" aria-hidden="true"></i>
	            			<i className="fa fa-twitter-square fa-3x social-icon" aria-hidden="true"></i>
            			</div>
            		</div>
            	</div>
            </div>
        </div>;
    }
}

AboutPage.propTypes = {};

export default AboutPage;
import React, { Component, PropTypes } from 'react';

class HomePage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div>
        <div className="homepage-hero-module">
		    <div className="video-container">
		        <div className="filter"></div>
		        <video autoPlay loop className="fillWidth">
		            <source src="app/coverr-video/Walking-By.mp4" type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
		            <source src="app/coverr-video/Walking-By.webm" type="video/webm" />Your browser does not support the video tag. I suggest you upgrade your browser.
		        </video>
		        <div className="poster hidden">
		            <img src="app/coverr-video/Walking-By.jpg" alt="" />
		        </div>
		        <div className="title-container">
		        	<h1>Military Veterans</h1>
		        	<h3>A resource for PTSD victims</h3>
	        	</div>
		        <div id="search-wrapper">
	    			<div className="col-lg-offset-3 col-lg-6 col-md-offset-2 col-md-8 col-sm-offset-2 col-sm-8">
	    				<form className="form-inline">
	    					<input className="form-control" type="text" id="search-field" placeholder="What are you looking for?"/>
	    					<button type="submit" className="btn btn-primary" id="search-button">Search</button>
			        	</form>
		        	</div>
	        	</div>
		    </div>
		</div>

        <div className="container">
			<div className="row">
				<div className="col-md-4 home-page">
					<h2><i className="fa fa-hospital-o" aria-hidden="true"></i> Crisis</h2>
					<p>Quisque rutrum sem at tempus fringilla. Pellentesque quis fringilla tortor. Praesent fringilla maximus magna sed maximus. Maecenas quis pellentesque ante. Cras tempus finibus ex nec tempus. Sed eleifend diam id tincidunt imperdiet. Vivamus euismod et elit id maximus. Donec efficitur posuere mi, sed feugiat ligula pulvinar sit amet.</p>

				</div>
				<div className="col-md-4 home-page">
					<h2><i className="fa fa-medkit" aria-hidden="true"></i> Help</h2>
					<p>Quisque rutrum sem at tempus fringilla. Pellentesque quis fringilla tortor. Praesent fringilla maximus magna sed maximus. Maecenas quis pellentesque ante. Cras tempus finibus ex nec tempus. Sed eleifend diam id tincidunt imperdiet. Vivamus euismod et elit id maximus. Donec efficitur posuere mi, sed feugiat ligula pulvinar sit amet.</p>

				</div>
				<div className="col-md-4 home-page">
					<h2><i className="fa fa-users" aria-hidden="true"></i> Socialize</h2>
					<p>Quisque rutrum sem at tempus fringilla. Pellentesque quis fringilla tortor. Praesent fringilla maximus magna sed maximus. Maecenas quis pellentesque ante. Cras tempus finibus ex nec tempus. Sed eleifend diam id tincidunt imperdiet. Vivamus euismod et elit id maximus. Donec efficitur posuere mi, sed feugiat ligula pulvinar sit amet.</p>

				</div>
			</div>
		</div>
        </div>;
    }
}

HomePage.propTypes = {};

export default HomePage;

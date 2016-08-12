import React, { Component, PropTypes } from 'react';

class HomePage extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
        <div className="jumbotron">
        	<img className="img-responsive" src="http://placehold.it/1903x650"/>
        	<div id="search-wrapper">	
    			<div className="col-lg-offset-3 col-lg-6 col-md-offset-2 col-md-8 col-sm-offset-2 col-sm-8">
    				<form className="form-inline">
    					<input className="form-control" type="text" id="search-field" placeholder="What are you looking for?"/>
    					<button type="submit" className="btn btn-primary" id="search-button">Search</button>
		        	</form>
	        	</div>
        	</div>
        </div>

        <div className="container">
			<div className="row">
				<div className="col-md-4">
					<h2><i className="fa fa-hospital-o" aria-hidden="true"></i> Crisis</h2>
					<p>Quisque rutrum sem at tempus fringilla. Pellentesque quis fringilla tortor. Praesent fringilla maximus magna sed maximus. Maecenas quis pellentesque ante. Cras tempus finibus ex nec tempus. Sed eleifend diam id tincidunt imperdiet. Vivamus euismod et elit id maximus. Donec efficitur posuere mi, sed feugiat ligula pulvinar sit amet.</p>
					<p>Quisque rutrum sem at tempus fringilla. Pellentesque quis fringilla tortor. Praesent fringilla maximus magna sed maximus. Maecenas quis pellentesque ante. Cras tempus finibus ex nec tempus. Sed eleifend diam id tincidunt imperdiet. Vivamus euismod et elit id maximus. Donec efficitur posuere mi, sed feugiat ligula pulvinar sit amet.</p>
				</div>
				<div className="col-md-4">
					<h2><i className="fa fa-medkit" aria-hidden="true"></i> Help</h2>
					<p>Quisque rutrum sem at tempus fringilla. Pellentesque quis fringilla tortor. Praesent fringilla maximus magna sed maximus. Maecenas quis pellentesque ante. Cras tempus finibus ex nec tempus. Sed eleifend diam id tincidunt imperdiet. Vivamus euismod et elit id maximus. Donec efficitur posuere mi, sed feugiat ligula pulvinar sit amet.</p>
					<p>Quisque rutrum sem at tempus fringilla. Pellentesque quis fringilla tortor. Praesent fringilla maximus magna sed maximus. Maecenas quis pellentesque ante. Cras tempus finibus ex nec tempus. Sed eleifend diam id tincidunt imperdiet. Vivamus euismod et elit id maximus. Donec efficitur posuere mi, sed feugiat ligula pulvinar sit amet.</p>
				</div>
				<div className="col-md-4">
					<h2><i className="fa fa-users" aria-hidden="true"></i> Socialize</h2>
					<p>Quisque rutrum sem at tempus fringilla. Pellentesque quis fringilla tortor. Praesent fringilla maximus magna sed maximus. Maecenas quis pellentesque ante. Cras tempus finibus ex nec tempus. Sed eleifend diam id tincidunt imperdiet. Vivamus euismod et elit id maximus. Donec efficitur posuere mi, sed feugiat ligula pulvinar sit amet.</p>
					<p>Quisque rutrum sem at tempus fringilla. Pellentesque quis fringilla tortor. Praesent fringilla maximus magna sed maximus. Maecenas quis pellentesque ante. Cras tempus finibus ex nec tempus. Sed eleifend diam id tincidunt imperdiet. Vivamus euismod et elit id maximus. Donec efficitur posuere mi, sed feugiat ligula pulvinar sit amet.</p>
				</div>
			</div>
		</div>
        </div>;
    }
}

HomePage.propTypes = {};

export default HomePage;
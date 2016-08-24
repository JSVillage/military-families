import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';

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
		            <source src="app/coverr-video/Merica.mp4" type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
		            <source src="app/coverr-video/Merica.webm" type="video/webm" />Your browser does not support the video tag. I suggest you upgrade your browser.
		        </video>
		        <div className="poster hidden">
		            <img src="app/coverr-video/Merica.jpg" alt="" />
		        </div>

		        <div className="row">
		        	<div className="col-lg-offset-6 col-lg-6 col-md-offset-6 col-md-6">
			        	<div className="title-container">
				        	<h1>Veteran Support</h1>
				        	<h3>A resource for PTSD <br/> survivors in AZ</h3>
			        	</div>

		        	</div>
	        	</div>
		    </div>
		</div>

        <div className="container">
			<div className="row">
				<div className="col-md-4 home-page">
					<h2><i className="fa fa-hospital-o" aria-hidden="true"></i> Crisis</h2>
					<p>If you are in need of immediate assistance the <a href="http://www.veteranscrisisline.net" target="_blank">Veterans Crisis Line</a> is available 24/7. Their contact number is 1-800-273-8255.</p>
					<p><i>" The Veterans Crisis Line connects Veterans in crisis and their families and friends with qualified, caring Department of Veterans Affairs responders through a confidential toll-free hotline, online chat, or text."</i></p>

				</div>
				<div className="col-md-4 home-page">
					<h2><i className="fa fa-medkit" aria-hidden="true"></i> Help</h2>
					<p>The <a href="http://www.phoenix.va.gov/" target="_blank">Phoenix VA Health Care Systems</a> main facility is located in central Phoenix.</p>
					<p>650 E. Indian School Rd.</p>
					<p>Phoenix, AZ 85021</p>
					<p>602-277-5551</p>
					<p>Other Vet Centers, clinics, and offices can be found <a href="http://www.va.gov/directory/guide/state.asp?STATE=AZ&dnum=1" target="_blank">here</a>.</p>

				</div>
				<div className="col-md-4 home-page">
					<h2><i className="fa fa-users" aria-hidden="true"></i> Comradery</h2>
					<p>You are not in this fight alone. The military's teamwork philosophy extends beyond the battlefield and into the rest of your lives. Please check out our <Link to="/events">Events</Link> and <Link to="/forum">Forum</Link> pages to connect with other veterans.</p>
					<p>Also check out <a href="https://theveteransdirectory.org/" target="_blank">The Veterans Directory</a> for more great information to veterans in general.</p>

				</div>
			</div>
      <div className="push"></div>
		</div>

        </div>;
    }
}

HomePage.propTypes = {};

export default HomePage;

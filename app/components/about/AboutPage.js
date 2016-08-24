import React, { Component, PropTypes } from 'react';

class AboutPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div id="about-background">

        	<div className="container about-page">
        		<h1>About Us</h1>
            	<div className="row">
            		<div className="col-md-6 about-page">
            			<p>The United States currently has a mental health crisis on its hands with large numbers of U.S. Veterans returning home not just with scars and missing limbs, but with trauma and a damaged soul. A 2016 VA report shows that an average of 20 veterans per day commit suicide. The Department of Housing and Urban Development estimates that there are 57,849 veterans that are homeless on any given night. Many of these soldiers are veterans returning from service in Afghanistan and Iraq. Society must take action against this crisis.</p>
            			<p>This is a web based application to help veterans find mental health services with a focus on PTSD in the State of Arizona. The application filters only required information so users can get straight to point and find services in the valley near them for emotional support via events and or forum discussion.</p>
            			<p>The idea for this project was proposed by Martin Patino, who noticed the difficulty in finding PTSD information. He helped put together a group of diverse developers who are interested in helping this cause. This project was made possible by the organizers of JS Village and the Phoenix JavaScript meetup.</p>
            		</div>
            		<div className="col-md-offset-1 col-md-5">
                        <div id="about-photo">
                            <img className="img-responsive" src="app/images/groupPhoto.jpg"/>
                            <p>From left to right: Moe Lubovac, Milan Prpa, Lizz Jolii, Martin Patino, Charmaine Gurule, Rebecca Snyder, Aaron Fischer</p>
                        </div>
            		</div>
            	</div>
            </div>

        </div>;
    }
}

AboutPage.propTypes = {};

export default AboutPage;

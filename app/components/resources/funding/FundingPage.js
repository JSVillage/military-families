import React, {Component, PropTypes} from 'react';

class FundingPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div className="resources">
            <div className="container">
                <h1 id="funding-h1"><i className="fa fa-dollar icon" aria-hidden="true"></i>Funding</h1>
                  <div className="row">
                     <div className="col-md-12">
                        <div className="panel funding">
                            <div className="panel-heading">
                                <h2><a href="http://www.nrotc.org/our-work/veterans-aid/" target="_blank">National Remember Our Troops Campaign</a></h2>
                            </div>
                            <div className="panel-body">
                                <p><i>"NROTC was founded on November 5, 2004, to provide Americans with a means of supporting our troops and veterans… and let them know they are not forgotten."</i></p>
                                <p>A charity organization commited to bettering the lives of Arizona's veterans.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="panel funding">
                            <div className="panel-heading">
                                <h2><a href="http://www.military.com/discounts" target="_blank">Military.com</a></h2>
                                <h4><i>A division of Monster Worldwide</i></h4>
                            </div>
                            <div className="panel-body">
                                <p><i>"We started Military.com in 1999 to revolutionize the way the 30 million Americans with military affinity stay connected and informed. Today, we're the largest military and veteran membership organization — 10 million members strong."</i></p>
                                <p>Features monthly discount promotions, and services ranging from getting a loan to getting a job.</p>
                            </div>
                        </div>
                    </div>
                     <div className="col-md-4">
                        <div className="panel funding">
                            <div className="panel-heading">
                                <h2><a href="http://themilitarywallet.com/military-discounts/" target="_blank">Military Wallet</a></h2>
                                <h4><i>Authored by Ryan Guina, a veteran of the USAF</i></h4>
                            </div>
                            <div className="panel-body">
                                <p><i>"The Military Wallet is a personal finance website for military members, veterans and their families. Our goal is to help the military community better manage money and understand the variety of programs and benefits available to them."</i></p>
                                <p>Includes sections on finances, retirement and taxes.</p>
                            </div>
                        </div>
                    </div>              
                    <div className="col-md-4">
                        <div className="panel funding">
                            <div className="panel-heading">
                                <h2><a href="http://militarybenefits.info/military-discounts/" target="_blank">Military Benefits</a></h2>
                                <h4><i>A non-government, privately sponsored website</i></h4>
                            </div>
                            <div className="panel-body">
                                <p><i>"2016 veterans and military discount list of hundreds of companies that offer military discounts to service members, retired military, veterans, spouses and their families.</i></p>
                                <p>Includes discounts for retail stores, insurance, travel and much more.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="panel funding">
                            <div className="panel-heading">
                                <h2><a href="https://dvs.az.gov/donation-fund" target="_blank">Arizona Department of Veterans' Services</a></h2>
                            </div>
                            <div className="panel-body">
                                <p><i>"The Arizona Veterans' Donation Fund, established in 1999 by the Arizona legislature, has helped fund programs that benefit veterans and their families throughout Arizona."</i></p>
                                <p>Provides options to volunteer your time or make a donation.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}

FundingPage.propTypes = {};

export default FundingPage;

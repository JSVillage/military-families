import React, {Component, PropTypes} from 'react';

class HealthcarePage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div>
          <div className="resources">
            <div className="container">

            <h1><i className="fa fa-medkit icon" aria-hidden="true"></i>Health Care</h1>

            <h2>Title</h2>
            <h3>Link</h3>
            <h3>Phone Number</h3>
            <p>Content (already in p tags in json)</p>

            title: "State Mental Health Resources for Arizona",
newItem: false,
linkName: "http://store.samhsa.gov/product/Arizona-State-Resource-Guide/SRG-AZ",
linkUrl: "https://www.nrd.gov/clickTrack/confirm/8644535",
phoneNumber: "",
governmentSupportedSite: true,
content: "<p>Lists of mental health facilities and services, substance abuse treatment facilities, suicide prevention programs and organizations that provide professional advocacy protection, family support programs, financing information and self-help groups in Arizona.</p>",

title: "National Alliance on Mental Illness (NAMI) - Arizona",
newItem: false,
linkName: "http://www.namiaz.org/",
linkUrl: "https://www.nrd.gov/clickTrack/confirm/14101238",
phoneNumber: "602-244-8166",
governmentSupportedSite: false,
content: "<p>Provides education, support and advocacy for persons with mental illnesses, their families and the wider community in order to improve quality of life. Find <a title="local affiliates" href="http://www.nami.org/Template.cfm?Section=Your_Local_NAMI&amp;Template=/CustomSource/AffiliateFinderContactList.cfm&amp;state=AZ" target="_blank">local affiliates</a>.</p>",

"organization": "Oasis Behavioral Health",
"Link": "http://www.obhhospital.com/ptsd"

organization": "Southwest Behavioral Health",
"Link": "https://www.sbhservices.org/#Area",
"description": "

organization": "Meadows",
"Link": "http://www.themeadows.com/conditions-we-treat/ptsd",
"description": " "
            </div>
        </div>
      </div>;
    }
}

HealthcarePage.propTypes = {};

export default HealthcarePage;

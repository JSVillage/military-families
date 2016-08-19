import React from 'react';
import {Route, IndexRoute} from 'react-router';
import MasterPage from './components/MasterPage';
import HomeContainer from './components/home/HomeContainer';
import AboutContainer from './components/about/AboutContainer';
import ContactContainer from './components/contact/ContactContainer';
import ResourcesContainer from './components/resources/ResourcesContainer';
import ForumContainer from './components/forum/ForumContainer';
import ServicesContainer from './components/services/ServicesContainer';
import EventsContainer from './components/events/EventsContainer';
import SubmitEventContainer from './components/submit-event/SubmitEventContainer';
import ForumAnswersContainer from './components/forum/ForumAnswersContainer';
import EducationContainer from './components/resources/education/EducationContainer';
import FundingContainer from './components/resources/funding/FundingContainer';
import HealthcareContainer from './components/resources/healthcare/HealthcareContainer';
import JobsContainer from './components/resources/jobs/JobsContainer';


export default(
    <Route path='/' component={MasterPage}>

        <IndexRoute component={HomeContainer}/>
        <Route path='services' component={ServicesContainer}/>
        <Route path='events' component={EventsContainer}/>
        <Route path='submit-event' component={SubmitEventContainer}/>        
        <Route path='forum' component={ForumContainer}/>
        <Route path="forum/:forumId" component={ForumAnswersContainer} />
        <Route path='resources' component={ResourcesContainer} />
        <Route path='about' component={AboutContainer}/>
        <Route path='resources/education' component={EducationContainer}/>
        <Route path='resources/funding' component={FundingContainer}/>
        <Route path='resources/healthcare' component={HealthcareContainer}/>
        <Route path='resources/jobs' component={JobsContainer}/>

    </Route>
);

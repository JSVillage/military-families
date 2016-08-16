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
import ForumAnswersContainer from './components/forum/ForumAnswersContainer';


export default(
    <Route path='/' component={MasterPage}>

        <IndexRoute component={HomeContainer}/>
        <Route path='services' component={ServicesContainer}/>
        <Route path='events' component={EventsContainer}/>
        <Route path='forum' component={ForumContainer}/>
        <Route path="forum/:forumId" component={ForumAnswersContainer} />
        <Route path='resources' component={ResourcesContainer} />
        <Route path='about' component={AboutContainer}/>

    </Route>
);

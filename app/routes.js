import React from 'react';
import {Route, IndexRoute} from 'react-router';
import MasterPage from './components/MasterPage';
import HomeContainer from './components/home/HomeContainer';
import AboutContainer from './components/about/AboutContainer';
import ContactContainer from './components/contact/ContactContainer';
<<<<<<< HEAD
import ResourcesContainer from './components/resources/ResourcesContainer';
=======
import ForumContainer from './components/forum/ForumContainer';
import ServicesContainer from './components/services/ServicesContainer';
import EventsContainer from './components/events/EventsContainer';
>>>>>>> 2e4d149248ec37f61647b8184caae211113bbe71

export default(
    <Route path='/' component={MasterPage}>
    
        <IndexRoute component={HomeContainer}/>
        <Route path='services' component={ServicesContainer}/>
        <Route path='events' component={EventsContainer}/>
        <Route path='forum' component={ForumContainer}/>
        <Route path='resources' component={ResourcesContainer} />
        <Route path='about' component={AboutContainer}/>
        // <Route path='contact' component={ContactContainer}/>

    </Route>
);

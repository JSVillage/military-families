import React from 'react';
import { Route, IndexRoute } from 'react-router';
import MasterPage from './components/MasterPage';
import HomeContainer from './components/home/HomeContainer';
import AboutContainer from './components/about/AboutContainer';
import ContactContainer from './components/contact/ContactContainer';

export default (
    <Route path='/' component={MasterPage}>
        <IndexRoute component={HomeContainer} />    
        <Route path='about' component={AboutContainer} />
        <Route path='contact' component={ContactContainer} />        
    </Route>
);
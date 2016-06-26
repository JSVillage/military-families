import React from 'react';
import {Route, IndexRoute} from 'react-router';
import MasterPage from './components/MasterPage';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';

export default (
    <Route path='/' component={MasterPage}>
        <IndexRoute component={HomePage} />    
        <Route path='/about' component={AboutPage} />
        <Route path='/contact' component={ContactPage} />        
    </Route>
);
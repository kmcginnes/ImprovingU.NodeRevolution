import React from 'react';
import { Route } from 'react-router';

import ReactApp from './components/ReactApp';
import About from './components/About';
import Inbox from './components/Inbox';

export default (  
  <Route path='/' component={ ReactApp }>
    <Route path='about' component={ About } />
    <Route path='inbox' component={ Inbox } />
  </Route>
);

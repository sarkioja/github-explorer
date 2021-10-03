import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/* import { StateContext } from './state' */

import Profile from './pages/Profile';
//import NotFound from './pages/NotFound';

import './static/styles/index.css';

function AppRouting() {


  return (
  <Router>
    <Switch>
      <Route exact path="/" component={Profile} />
      <Route path="/:userID" component={Profile} />
      {/* <Route component={NotFound} /> */}
    </Switch>
  </Router>
)}

ReactDOM.render(<AppRouting />, document.getElementById("root"));
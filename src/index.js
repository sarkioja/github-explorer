import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/* import { StateContext } from './state' */

import Profile from './pages/Profile';
import Repos from './pages/Repos';
import Starred from './pages/Starred';

//import NotFound from './pages/NotFound';

import './static/styles/index.css';

function AppRouting() {


  return (
  <Router>
    <Switch>
      <Route exact path="/" component={Profile} />
      <Route path="/:userID" component={Profile} />
      {/* <Route path="/repos" component={Repos} />
      <Route path="/starred" component={Starred} /> */}
      {/* <Route component={NotFound} /> */}
    </Switch>
  </Router>
)}

ReactDOM.render(<AppRouting />, document.getElementById("root"));
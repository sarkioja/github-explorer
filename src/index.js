import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { StateContext } from './state'
import Search from './pages/Search';
import Profile from './pages/Profile';

import './static/styles/index.css';

function AppRouting() {

  const [query, setQuery] = useState('');
  const [search, setSearch] = useState();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const value = { query, search, data, isLoading, setQuery, setSearch, setData, setIsLoading };


  return (  
  <StateContext.Provider value={ value } >
    <Router>
      <Switch>
        <Route exact path="/" component={Search} />
        <Route path="/:userID" component={Profile} />
      </Switch>
    </Router>
  </StateContext.Provider>
)}

ReactDOM.render(<AppRouting />, document.getElementById("root"));
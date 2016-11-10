import React from "react";
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import Home from '../components/Home.jsx';
import Main from '../components/Main.jsx';
import SearchContainer from '../containers/SearchContainer.jsx';
import ResultsContainer from '../containers/ResultsContainer.jsx';
import VenueContainer from '../containers/VenueContainer.jsx'
import TopVenuesContainer from '../containers/TopVenuesContainer.jsx'

const routes = (
  <Router history={hashHistory} >
    <Route path='/' component={Main} >
      <IndexRoute component={Home} />
      <Route path='search' component={SearchContainer} />
      <Route path='results/:currentSearch' component={ResultsContainer} />
      <Route path='results' component={ResultsContainer} />
      <Route path='venues' component={VenueContainer} />
      <Route path='topvenues' component={TopVenuesContainer} />
      <Route path='topvenues/:currentCity' component={TopVenuesContainer} />
    </Route>
  </Router>
  );

export default routes;

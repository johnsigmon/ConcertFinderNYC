import React from "react";
const ReactRouter = require('react-router');
import Home from '../components/Home.jsx';
import Main from '../components/Main.jsx';
import SearchContainer from '../containers/SearchContainer.jsx';
import ResultsContainer from '../containers/ResultsContainer.jsx';

const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;

const routes = (
  <Router history={hashHistory} >
    <Route path='/' component={Main} >
      <IndexRoute component={Home} />
      <Route path='/search' component={SearchContainer} />
      <Route path='results' component={ResultsContainer} />
    </Route>
  </Router>
  );

export default routes;

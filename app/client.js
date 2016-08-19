import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Home from './pages/Home';
import Master from './components/Master';
import Poll from './pages/Poll';
import User from './pages/User';

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Master}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="poll/:pollid*" name="poll" component={Poll}></Route>
      <Route path="user/:userid*" name="user" component={User}></Route>
    </Route>
  </Router>,
app);

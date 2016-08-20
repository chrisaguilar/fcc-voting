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
      <IndexRoute component={Home} />
      <Route path="poll/:pollid*" component={Poll} />
      <Route path="user/:userid*" component={User} />
    </Route>
  </Router>,
app);

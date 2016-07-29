import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Poll from "./pages/Poll";
import Polls from "./pages/Polls";
import SignUp from "./pages/SignUp";
import User from "./pages/User";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Polls}></IndexRoute>
      <Route path="login" name="login" component={Login}></Route>
      <Route path="signup" name="signup" component={SignUp}></Route>
      <Route path="poll/:pollid*" name="poll" component={Poll}></Route>
      <Route path="user/:userid*" name="user" component={User}></Route>
    </Route>
  </Router>,
app);

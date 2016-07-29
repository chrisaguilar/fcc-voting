import React from 'react';
import { Link } from 'react-router';

export default class Account extends React.Component {
  render() {
    return (
      <li><Link to="login">Login</Link></li>
    );
  }
}

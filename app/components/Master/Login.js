import React from 'react';
import { Button, ButtonGroup, Col, Grid, MenuItem, Modal, NavItem, NavDropdown, Row } from 'react-bootstrap';

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    }

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  open() {
    this.setState({ showModal: true });
  }

  close() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <NavDropdown title="Login" id="nav-dropdown">
        <MenuItem header>Login via</MenuItem>
        <MenuItem href="/auth/facebook"><i className="fa fa-facebook"></i> Facebook</MenuItem>
        <MenuItem href="/auth/github"><i className="fa fa-github"></i> GitHub</MenuItem>
        <MenuItem href="/auth/google"><i className="fa fa-google"></i> Google</MenuItem>
        <MenuItem href="/auth/twitter"><i className="fa fa-twitter"></i> Twitter</MenuItem>
      </NavDropdown>
    );
  }
}

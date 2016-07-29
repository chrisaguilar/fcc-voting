//Nav to go at top of every page
//  Brand on left
//  Home button on right (b4 Account)
//  Account options on right

import React from 'react';
import { Link } from 'react-router';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';

import Account from "./Header/Account";

export default class Head extends React.Component {
  render () {
    return (
      <Navbar fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">FCC Voting</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <IndexLinkContainer to={{pathname: '/'}}>
              <NavItem eventKey={1}>Home</NavItem>
            </IndexLinkContainer>
            <LinkContainer to={{pathname: '/login'}}>
              <NavItem eventKey={2}>Login</NavItem>
            </LinkContainer>
            <LinkContainer to={{pathname: '/signup'}}>
              <NavItem eventKey={3}>Sign Up</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
  }
}

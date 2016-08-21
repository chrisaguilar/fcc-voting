import React from 'react';
import { Link } from 'react-router';
import { Row, Col, Nav, Navbar, NavItem } from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';

import Login from './Login';

export default class Head extends React.Component {
  render () {
    return (
      <Row>
        <Col sm={8} smOffset={2}>
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
                  <NavItem>Home</NavItem>
                </IndexLinkContainer>
                <LinkContainer to={{pathname: '/about'}}>
                  <NavItem>About</NavItem>
                </LinkContainer>
                {
                  this.props.isLoggedIn ? (
                    <LinkContainer to={{pathname: `/user`}}>
                      <NavItem>My Polls</NavItem>
                    </LinkContainer>
                  ) : ("")
                }
                {
                  this.props.isLoggedIn ? (
                    <NavItem href="/logout">Logout</NavItem>
                  ) : (
                    <Login />
                  )
                }
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
    );
  }
}
